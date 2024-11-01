const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const dbConnection = require("./DataBase/dbConnection");
const { errorMiddleware } = require("./error/error");
const reservationRoute = require("./routes/reservationRoute");

const app = express();
dotenv.config({ path: "./config/config.env" });

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/reservation", reservationRoute);

dbConnection();

app.use(errorMiddleware);

module.exports = app;
