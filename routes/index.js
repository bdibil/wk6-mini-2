const express = require('express');
const app = express();

// Import our modular routers 

const moviesRouter = require('./movie_list');


app.use('/movie_list', moviesRouter);


module.exports = app;
