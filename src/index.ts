import dotenv from "dotenv";
import express from "express";
import http from "http";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import router from "./router";

dotenv.config();

const app = express();

app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8000, () => {
  console.log("Server running on local host 8000");
});

const MONGO_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.fwi8x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("connected", () => console.log("connected"));
mongoose.connection.on("error", (error: Error) => {
  console.error(error);
});

app.use("/", router());
