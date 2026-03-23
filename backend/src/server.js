import express from "express";
import taskRoutes from "./routes/taskRoutes.js";
import { connectDB } from "./configs/db.js";
import dotenv from "dotenv";

dotenv.config();

connectDB();

const PORT = process.env.PORT || 5001;
const app = express();

app.use("/api/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
