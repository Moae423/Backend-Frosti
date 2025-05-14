import express from "express";
import cors from "cors";
import "dotenv/config";
import studentRoutes from "./routes/studentRoute.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/students", studentRoutes);
app.use(cors());

app.listen(port, () => {
  console.log(`Server running di ${port}`);
});

app.get("/", (req, res) => {
  res.status(200).json("ok");
});
