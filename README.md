# Favourite Language Picker
[![Build Status](https://travis-ci.com/Kharouk/Fave-Language-Picker.svg?token=y9Amnq7P4ASRBhz6qGVw&branch=master)](https://travis-ci.com/Kharouk/Fave-Language-Picker)

Unsure on what your favourite programming language is? Have millions of repos and still guessing if you use Ruby over JavaScript? Use this renowned application to figure out your most used language! 

## Deployed Application:
https://github-common-language.herokuapp.com

## Start Development Server
First, please install the dependencies by running:
```
npm install
```

If you have nodemon installed, just run:
```
nodemon
```

Otherwise, start the server by running:
```bash
npm start
```

## Tests
For this project, I created both unit tests using Jasmine's library as well as using Protractor (non-Angular) for e2e testing. 

To run unit tests, all you need to type is:
```bash
npm test
```

I decided to use Protractor as my e2e testing framework to try something new. It's commonly used for Angular but I liked that it used Jasmine's syntax. I set it up to work on non-Angular projects. To get it to work you have to run:
```bash
$ npm run webdriver-manager update
$ npm run webdriver-manager start
```
Keep that server running, and in a separate terminal window run:
```bash
npm run feature-test
```

That will open up a Chromium browser and will run through the tests. When you are finished, you may safely close the terminal running the webdriver server.

## Further Development

Although this application was created for a technical test, I wanted to focus on long-term production. That's why I deployed it to Heroku, link here, using Travis CI. 

My Travis CI process looks like this:


This way, whatever changes are made must first pass any tests that are written, as well as be linted properly using ESLint. This guarantees that the code is maintained on a long-term basis. 