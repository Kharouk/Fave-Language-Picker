const express = require('express');
const path = require('path');

const port = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index', { title: 'Github Language Picker' }));

app.listen(port, () => console.log(`App listening on port ${port}`));
