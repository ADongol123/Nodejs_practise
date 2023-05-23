import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";
import  connectDB  from "./config/db.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => res.status(200).send("Hello World"));

app.use("/api/books", bookRoutes);
app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`listening to port 5000`));
