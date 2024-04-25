import express from "express"
import mongoose, { Mongoose, mongo } from "mongoose"
import dotenv from "dotenv"
import { connectDB } from "./data/database.js";
import { config } from "dotenv";


config({
    path: "./data/.env",
});

connectDB();

const app = express()

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})


