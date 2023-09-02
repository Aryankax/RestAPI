const express = require("express");
const deleteRoute = new express.Router();

const movies = require("../models/MoviesAndShows");

// Delete Data

deleteRoute.delete("/MovieAndTVShow/:id", async (req,res) => {
    try {
        const _id = req.params.id;
        const deleteData = await movies.findByIdAndDelete(_id);

        if(!deleteData){
            res.status(404).send();
        } else{
            res.send(deleteStudents);
        }

    } catch (e) {
            res.status(500).send(e);
    }
})
module.exports = deleteRoute;