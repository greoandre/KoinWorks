class errorHandler {
  static async errHandler(err, req, res, next) {
    let errCode = 500;
    let msg = "Internal Server Error";

    if (err.name === "notFound") {
      (errCode = 404), (msg = `Data is not found`);
    }

    res.status(errCode).json({
      msg,
    });
  }
}

module.exports = errorHandler;
