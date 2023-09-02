const express = require("express");
const getDataRoute = new express.Router();

const movies = require("../models/MoviesAndShows");

// Read Movies Or Shows Data

getDataRoute.get("/MovieAndTVShow", async(req,res)=> {
    try {
        const moviesData = await movies.find();

        res.send(moviesData);
    } catch(e){
        res.send(e);
    }
})

module.exports = getDataRoute;