const { ErrorHandler } = require("../error/error");
const Reservation = require("../models/revervationSchema");

const sendReservation = async (req, res, next) => {
  const { firstName, lastName, phoneNumber, email, time, date } = req.body;
  console.log(req.body);

  if (!firstName || !lastName || !phoneNumber || !email || !time || !date) {
    return next(new ErrorHandler("Please fill full reservation form!", 400));
  }

  try {
    await Reservation.create({
      firstName,
      lastName,
      phoneNumber,
      email,
      time,
      date,
    });

    res
      .status(200)
      .json({ success: true, message: "Reservation sent successfully" });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      return next(new ErrorHandler(validationErrors.join(" , "), 400));
    }
    next(error);
  }
};

module.exports = sendReservation;
