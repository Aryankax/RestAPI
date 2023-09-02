const express = require("express");
const getDataByIdRoute = new express.Router();

const movies = require("../models/MoviesAndShows");

// Read data by id 

getDataByIdRoute.get("/MovieAndTVShow/:id", async(req,res)=> {
    try{
        const _id = req.params.id;

        const moviesData = await movies.findById(_id);

        if(!moviesData){
            return res.status(404).send();
        } else {
            res.send(moviesData);
        } 
    } catch(e){
        res.status(500).send(e);
    }
})

module.exports = getDataByIdRoute;