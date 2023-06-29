import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import authorRoutes from "./routes/authorRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";
import connectDB from "./config/db.js";
import cors from "cors";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
dotenv.config();

connectDB();
const app = express();

app.use(cors());

app.use(express.json());
const __filename = fileURLToPath(import.meta.url);

// Get the directory name
const __dirname = dirname(__filename);

// Set the 'views' directory where your view templates are located
app.set("views", path.join(__dirname, "views"));

// Set EJS as the template engine
app.set("view engine", "ejs");

app.get("/", (req, res) => res.status(200).send("Hello World"));

app.use("/api/books", bookRoutes);
app.use("/api/user", userRoutes);
app.use("/api/author", authorRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`listening to port 5000`));
