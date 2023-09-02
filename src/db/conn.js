const mongoose = require('mongoose');

async function main() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/MovieAndTVShows-api");
        console.log("Connection is successful");
    } catch (error) {
        console.error("Connection error:", error);
    }
}

main().catch(err => console.log(err));
