const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// 1 - MIDDLEWARES
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));
app.use(express.json()); // middleware - updates incomming data and adds them to body

//serving static files
app.use(express.static(`${__dirname}/public`));

// creating our own middleware- takes 3 parameters- req, res & next
// order of our middlewares matters a lot

/*
// GET requests
    POST requests - entire new data is send
    PATCH request - only updated data is sent
    // /    ?- for optional parameters
    //      :- for permanent parameters
*/
app.use('/api/v1/users', userRouter);
app.use('/api/v1/tours', tourRouter);

module.exports = app;
/*
// Middleware
    something that manipulates data and sends req,res to next stop in request-response cycle
    "everything is middleware, even routes"

// Mongoose
    - is a object data modelling library for mongodb and nodejs, a higher level of abstraction
    - it allows for rapic and simple development of mongodb database interactions
    - features- schemas to model data and relationships, easy data validation, simple query API, middleware, etc
    - Mongoose Scheme: where we model our data, by describgin values and validation
    - Mongoose Model: a wrapper for the schema, providing an interface to the database for crud operations
    Schema -> Model 
*/
