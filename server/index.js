import express from "express"
import mongoose, { Mongoose, mongo } from "mongoose"
import dotenv from "dotenv"
import { connectDB } from "./data/database.js";
import { config } from "dotenv";
import userRouter from "./routes/user.route.js"
import authRouter from "./routes/auth.route.js"

config({
    path: "./data/.env",
});

connectDB();

const app = express()
app.use(express.json());


app.listen(3000, () => {
    console.log("Server is running on port 3000")
})


app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success: false,
        statusCode,//in es6 if variable and key has same name then we don't need to write statusCode twice
        message,
    })
})