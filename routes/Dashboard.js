import express from "express";
import { getFunction } from "../controllers/GetMovies.js";
import { postFunction } from "../controllers/PostMovies.js";
import { updateMovie } from "../controllers/EditMovies.js";
import { deleteMovie } from "../controllers/DeleteMovies.js";
import cookieParser from "cookie-parser";
import helmet from "helmet";


const router = express.Router();
router.use(helmet());
router.use(cookieParser());


router.get("/", getFunction); 

router.post("/", postFunction); 
router.put("/edit/:id", updateMovie); 
router.delete("/delete/:id", deleteMovie);

export const DashRouter = router;
