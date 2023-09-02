const express = require("express");

//Getting connection to MongoDb

require("./db/conn");

//Requiring the movies and shows collection fom the Models folder

const movies = require("./models/MoviesAndShows");

//Requiring all the routes modules from the router folder

const createRoute = require("./routers/Create");

const getDataRoute = require("./routers/GetData");

const getDataByIdRoute = require("./routers/getDataById");

const updateRoute = require("./routers/Update");

const deleteRoute = require("./routers/Delete");

const app = express();

app.use(express.json());

//Defining port number 

const port = process.env.PORT || 8000;

//Using all the routes 

app.use(createRoute);

app.use(getDataRoute);

app.use(getDataByIdRoute);

app.use(updateRoute);

app.use(deleteRoute);

app.listen(port, ()=>{
    console.log(`Connection is setup at ${port}`);
});