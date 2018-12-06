const express = require('express');

const router = express.Router();

// Middleware
const fetch = require('node-fetch');

// Scripts
const findCommonLanguage = require('../javascripts/findLanguage');

router.get('/', (req, res) => {
  res.render('index', { title: 'Github Language Picker', alertMessage: req.session.active });
});

router.post('/user', (req, res) => {
  fetch(`https://api.github.com/users/${req.body.gitUser}/repos`)
    .then(response => response.json())
    .then((myJson) => {
      req.session.result = myJson;
      res.redirect('/results/');
    });
});

router.get('/results/', (req, res) => {
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

// Catch if user visits unknown route:
router.all('/*', (req, res) => {
  res.redirect('/');
});

module.exports = router;
