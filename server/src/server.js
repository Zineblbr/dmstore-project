import express from "express";
import "dotenv/config";
import dbConnect from "./db/dbConnect.js";
import cors from "cors";
import Routes from "./routes/index.js";

const server = express();
server.use(express.json());
server.use(cors());

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

Routes(server);

dbConnect();
