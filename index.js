const express = require('express');
const path = require('path');

const app = express();

// Default Dev Port
const port = process.env.PORT || 3000;

// Middleware
const session = require('express-session');
const bodyParser = require('body-parser');

// Routes
const mainRoute = require('./routes/main.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'banana bread' }));

app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine', 'ejs');

app.use('/', mainRoute);

app.listen(port, () => console.log(`App listening on port ${port}`));
