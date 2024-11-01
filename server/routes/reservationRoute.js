const express = require("express");
const router = express.Router();

const sendReservation = require("../controller/revervation");

router.post("/send", sendReservation);

module.exports = router;
