import express from "express";
import taskRoutes from "./routes/taskRoutes.js";
import { connectDB } from "./configs/db.js";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

dotenv.config();

const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

const app = express();

// middleware
if (process.env.NODE_ENV === "development") {
  app.use(cors({ origin: "http://localhost:5173" }));
}
app.use(express.json());

app.use("/api/tasks", taskRoutes);

app.use(express.static(path.join(__dirname, "../frontend/dist")));

if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
