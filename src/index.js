const express = require('express');
const morgan = require('morgan');
//
const path = require('path');
// const { engine } = require('express-handlebars');
const handlebars = require('express-handlebars');
//
const app = express();
const port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// XMLHttpRequest, fetch, axios

// HTTP Logger
// app.use(morgan('combined'));

// Template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));

// routes init
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
