const express = require("express");
const updateRoute = new express.Router();

const movies = require("../models/MoviesAndShows");

// Update Data

updateRoute.patch("/MovieAndTVShow/:id", async (req,res) => {
    try{
        const _id = req.params.id;
        const updateData= await movies.findByIdAndUpdate(_id, req.body, {
            new:true
        });

        res.send(updateData);

    } catch(e){
        res.status(404).send(e);
    }
})
module.exports = updateRoute;