const express = require('express');
const path = require('path');

const app = express();

// Default Dev Port
const port = 3000;

// Middleware
const session = require('express-session');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');

// Scripts
const findCommonLanguage = require('./javascripts/findLanguage');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'banana bread' }));

app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { title: 'Github Language Picker', alertMessage: req.session.active });
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
  const repoData = req.session.result;
  if (repoData.message === 'Not Found') {
    req.session.active = true;
    res.redirect('/');
  }

  req.session.active = false;
  const aryOfLanguages = [];
  repoData.forEach((repo) => {
    aryOfLanguages.push(repo.language);
  });

  res.render('result', {
    username: repoData[0].owner.login,
    language: findCommonLanguage(aryOfLanguages),
  });
});

app.listen(port, () => console.log(`App listening on port ${port}`));
