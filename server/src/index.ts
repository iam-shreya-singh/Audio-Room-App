import express from "express";
// import bodyParser from "body-parser";
import cors from "cors";
// import dotenv from "dotenv";

import authRoutes from "./routes/auth";

const app = express();

app.use(express.json());
app.use(cors(
 {
  origin: "*",
 } 
));

app.use("/auth", authRoutes);

const PORT = parseInt(process.env.PORT || "3001", 10);
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server is running on port ${PORT}`)
});
