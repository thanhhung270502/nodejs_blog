const express = require('express');
const morgan = require('morgan');
//
const path = require('path');
// const { engine } = require('express-handlebars');
const handlebars = require('express-handlebars');
//
const app = express();
const port = 3000;

// HTTP Logger
app.use(morgan('combined'));

// Template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));

app.get('/', (req, res) => {
    res.render('home');
    // res.send('Hello World!');
});

app.get('/news', (req, res) => {
    res.render('news');
});

// console.log(path.join(__dirname, 'resources\\views'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
