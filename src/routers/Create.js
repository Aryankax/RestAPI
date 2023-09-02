const express = require("express");
const createRoute = new express.Router();

const movies = require("../models/MoviesAndShows");

// Enter a new Movie or Tv Show 

createRoute.post("/MovieAndTVShow", (req, res) => {

    const data = new movies(req.body);

    console.log(req.body);

    data.save().then(() => {
        res.send(data);
    }).catch((err) => {
        res.send(err);
    });;
})


module.exports = createRoute;