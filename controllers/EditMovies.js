import { Movie } from "../models/Movie.js";

export const updateMovie = async (req, res) => {
  try {
    //Cookie authentication

    const name = req.cookies.name;
    if (!name) return res.status(400).send({ error: "Un authorized" });

    //passing the id in params

    const id = await req.params.id;
    let movie = await Movie.findOne({ _id: id });
    if (!movie)
      //posting a year if the movie is not defined
      return res.status(400).send({ error: "Not a valid Movie" });
    //updating the movie details.
    const updatedMovie = await req.body;
    const changedMovie = await Movie.findOneAndUpdate(
      { _id: id },
      { $set: updatedMovie },
      { new: true }
    );
    return res.status(200).send({ payload: changedMovie });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "Internal Server Error" });
  }
};
