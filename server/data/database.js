import mongoose from "mongoose";

export const connectDB = () => {
    mongoose
        .connect(process.env.MONGO_URI)
        .then((c) => console.log("Database connected"))
        .catch((error) => console.log("Database connection error:", error));
};