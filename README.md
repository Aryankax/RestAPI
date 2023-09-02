# RestAPI
This REST API is made with Express, Node, and MongoDB. It has CRUD operations for TV shows and movies, including: 

- Create a new TV show or movie
- Read all or a specific TV shows and movies
- Update a TV show or movie
- Delete a specific TV show or movie

# Getting Started

Follow these instructions to set up and run the API on your local machine.

# Prerequisites

Make sure you have the following software installed:

- Node.js
- Express.js
- MongoDB

# Installation

1. clone this repository to your local machine:

`git clone https://github.com/Aryankax/RestAPI`

2. Navigate to the project directory:

` cd RestAPI`

3. Install the required dependencies:

`npm install`

4. Navigate to the Source directory:

`cd src`

5. Start Nodemon

`nodemon app.js`

The API Should be now up and running locally.

# Endpoints 

## Create a New Movie/TV Show 

- Url: `localhost:8000/MovieAndTVShow/`
- Method: POST
- Request Body: JSON object containing Movie/TV Show Details
- Example Format: 
` {
    "Name": "Znmd",
    "ReleaseDate": "2011",
    "Genre": "Rom-Com",
    "Cast": "Hritik, Abhay, Farhan, Katrina, Kalki",
    "Rating": "9"
}
`
- Photo: <img width="960" alt="image" src="https://github.com/Aryankax/RestAPI/assets/113718466/5cbf27e7-4ff0-4c3a-886c-4174ed0f068f">


## Retrieve all/specific Movie/TV Show Details

- Url: `localhost:8000/MovieAndTVShow/`
- Method: GET
- parmeters: `id`(unique identifier of the Movie/TV Show)
- example: `localhost:8000/MovieAndTVShow/64f3423764f14450f71b4b0b`
- Photo: <img width="960" alt="image" src="https://github.com/Aryankax/RestAPI/assets/113718466/dc74927d-9873-4518-8ee3-a0e1a23774c4">


## Update Movie/TV Show Details

- Url: `localhost:8000/MovieAndTVShow/`
- Method: Patch
- paramters: `id` (unique identifier of the Movie/TV Show)
- Photo: <img width="960" alt="image" src="https://github.com/Aryankax/RestAPI/assets/113718466/563914cc-230f-494a-b444-d533490082a4">


## Delete Movie/Tv Show Details

- Url: `localhost:8000/MovieAndTVShow/`
- Method: Delete
- parameters: `id` (unique identifier of the Movie/TV Show)
- Photo: <img width="677" alt="image" src="https://github.com/Aryankax/RestAPI/assets/113718466/27d869d9-d601-4227-a175-a3dea1727e6e">


## Usage

You can use this API to manage your collection of movies and TV shows. Here are some example use cases:

- Create a new movie or TV show entry with relevant details.

- Retrieve information about a specific movie or TV show using its unique ID.

- Update the details of a movie or TV show with new information.

- Delete a movie or TV show from your collection.












