class ErrorHandler extends Error {
  constructor(message, statuscode) {
    super(message);
    this.statuscode = this.statuscode;
  }
}

export const errorMiddleWare = (err, req, res, next) => {
  err.message = err.message || "Internal Server Error!";
  err.statuscode = err.statuscode || "500";

  return res
    .status(err.statuscode)
    .json({ success: false, message: err.message });
};

module.exports = ErrorHandler;
