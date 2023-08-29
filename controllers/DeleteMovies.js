import { Movie } from "../models/Movie.js";

export const deleteMovie = async (req, res) => {
  try {

    //Cookie authentication

    const name = req.cookies.name;
    if (!name) return res.status(400).send({ error: "Un authorized" });
    
    //passing the id in params

    const id = await req.params.id;
    const movie = await Movie.findOneAndDelete({ _id: id });
    if (!movie)
      //posting a year if the movie is not defined
      return res.status(400).send({ error: "Not a valid Movie" });
     //Deleting a movie

    return res.status(200).send({ message:"Sucessfully Deleted" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "Internal Server Error" });
  }
};
