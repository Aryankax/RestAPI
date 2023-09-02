const mongoose = require('mongoose');

const validator = require('validator');

const moviesSchema = new mongoose.Schema({
    Name : {
        type: String,
        required: true,
        minlength: 1
    },
    ReleaseDate: {
            type:String,
            required: true
        },
    Genre: {
        type:String,
        min:2,
        required:true
    }, 
    Cast: {
        type:String,
        required: true
    },
    Rating: {
        type:Number,
        required: true
    }
})

// We will create a new collection

const movies = new mongoose.model('movies', moviesSchema);

module.exports = movies;