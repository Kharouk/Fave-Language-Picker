const express = require('express');
const path = require('path');

const app = express();

// Default Dev Port
const port = 3000;

// Middleware
const session = require('express-session');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'banana bread' }));

app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { title: 'Github Language Picker' });
});

app.post('/user', (req, res) => {
  fetch(`https://api.github.com/users/${req.body.gitUser}/repos`)
    .then(response => response.json())
    .then((myJson) => {
      req.session.result = myJson;
      res.redirect('/results/');
    });
});

app.get('/results/', (req, res) => {
  const data = req.session.result;
  const aryOfLanguages = [];
  data.forEach((repo) => {
    aryOfLanguages.push(repo.language);
  });

  res.render('result', {
    username: data[0].owner.login,
    repos: data,
    language: findCommonLanguage(aryOfLanguages),
  });
});

app.listen(port, () => console.log(`App listening on port ${port}`));

const findCommonLanguage = (aryOfLanguages) => {
  let maxCount = 1;
  let langCount = 0;
  let result;
  for (let i = 0; i < aryOfLanguages.length; i += 1) {
    for (let j = i; j < aryOfLanguages.length; j += 1) {
      if (aryOfLanguages[i] === aryOfLanguages[j]) {
        langCount += 1;
        if (maxCount < langCount) {
          maxCount = langCount;
          result = aryOfLanguages[i];
        }
      }
    }
    langCount = 0;
  }
  if (result != null) {
    return result;
  }
  return 'Sorry, you prefer to write READMEs!';
};
