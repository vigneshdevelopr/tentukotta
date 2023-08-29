import mongoose from "mongoose";
const movieSchema = new mongoose.Schema({
    movieName:{type:String,required:true},
    rating :{type:Number, required:true},
    cast:[String],
    genre:{type:String,required:true},
    url:{type:String,required:true},
    releaseDate:{type:Date, required:true, default:Date.now}
});
const Movie = mongoose.model("movie", movieSchema);
export {Movie}; 