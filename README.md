# Favourite Language Picker
[![Build Status](https://travis-ci.com/Kharouk/Fave-Language-Picker.svg?token=y9Amnq7P4ASRBhz6qGVw&branch=master)](https://travis-ci.com/Kharouk/Fave-Language-Picker)

Unsure on what your favourite programming language is? Have millions of repos and still guessing if you use Ruby over JavaScript? Use this renowned application to figure out your most used language!

The application is based off a technical test I received for a job position as a full-stack engineer. 

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
npm start
```
This will also start the local development server of the application.

Finally, run the feature tests by typing:
```bash
npm run feature-test
```
That will open up a Chromium browser and will run through the tests. When you are finished, you may safely close the terminal running the webdriver server.

## Development Process
When solving this technical challenge, I had three goals. Could I successfully complete this challenge using JavaScript/Node? Could I create an application that could be used long-term? Could I test the application to make sure the API works?

### Using JavaScript/Node:
I decided to use Express, which is a light web framework. I knew I would have to make calls to an API and save information, so I wanted to have some kind of back-end that would do all the work. I didn't use something comfortable like Rails because I knew it would make the app too bloated for its purpose.

I also wanted to challenge myself. I wanted to create more applications using JavaScript, especially because when I finished this app, my most commonly used language is Ruby! So I definitely want to switch things up and gain more experience.

### Using the Application on a long-term basis:
I didn't just want to solve the challenge. I wanted to write an application that was refactored and could be added to. Using a framework like Express, I know that I could add additional routes to check what spoken language does the user know. How many followers do they have? All I'd have to do is create more routes. 

I also wanted to make sure the code was kept neat and tidy, using ESLint as well as making sure my tests were passing. I talk about this process more in the Further Development section below.

I also wanted to make sure these automation checks were in place in case another developer would like to contribute and add to the project.

### Testing the Application's API calls:
Currently, the fetch requests being made to GitHub's API is in the routes, and to test that I used Protractor to successfully make sure that the API works.

However, my next goal is to refactor the logic out of the routes, and into script files, allowing me to stub out testing the fetch requests so I don't rely on what GitHub gives me back. This also would contribute to maintaining this project for a long period. 

## Further Development

Although this application was created for a technical test, I wanted to focus on long-term production. That's why I deployed it to Heroku, [link here][1], using Travis CI. 

My Travis CI process looks like this:
![Continuous Integration][2]


This way, whatever changes are made must first pass any tests that are written, as well as be linted properly using ESLint. This guarantees that the code is maintained on a long-term basis. 

This also helps other developers if they decide to contribute to this application. Whenever they submit a pull request, Travis will make sure their code is properly formatted and tested, before giving the go-ahead to merge the branch. This makes sure everyone's code is aligned.

[1]: https://github-common-language.herokuapp.com/
[2]: mockups/travisCI.png
