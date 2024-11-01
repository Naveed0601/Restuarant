const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const dbConnection = require("./DataBase/dbConnection");
const errorMiddleWare = require("./error/error");

const app = express();
dotenv.config({ path: "./config/config.env" });
app.use(
  cors({
    orgin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbConnection();

app.use(errorMiddleWare);

module.exports = app;
