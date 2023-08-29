import { Movie } from "../models/Movie.js";

export const postFunction = async (req, res) => {
  try {
    //Posting all the details of the movie
    const movieName = await req.body.movieName;
    const rating = await req.body.rating;
    const cast = await req.body.cast;
    const genre = await req.body.genre;
    const releaseDate =  new Date(req.body.releaseDate);

    //finding weather the movie already exit
    let movie = await Movie.findOne({ movieName: movieName });
    //if movie is not there add a new movie

    if (!movie) {
      movie = await new Movie({
        movieName,
        rating,
        cast,
        genre,
        releaseDate,
      }).save();
    }
    //returing a req
    return res.status(200).send({ payload: movie });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "Internal Server Error" });
  }
};
