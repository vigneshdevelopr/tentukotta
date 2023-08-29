import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import { MongoConnect } from "./Database.js";

// dotenv configuration
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000; // Fallback to 3000 if PORT is not specified in .env

MongoConnect();

// Middleware:
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).send('Your server has been hosted successfully');
});

// Listening
app.listen(PORT, () => console.log(`Your server will be listening on port http://localhost:${PORT}`));
