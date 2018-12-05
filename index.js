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
  fetch(`https://api.github.com/search/users?q=${req.body.gitUser}`)
    .then(response => response.json())
    .then((myJson) => {
      req.session.result = myJson;
      res.redirect('/results/');
    });
});

app.get('/user/:username', (req, res) => {
  res.render('user', { username: req.params.username });
});

app.get('/results/', (req, res) => {
  const data = req.session.result;
  res.render('result', { data });
});

app.listen(port, () => console.log(`App listening on port ${port}`));
