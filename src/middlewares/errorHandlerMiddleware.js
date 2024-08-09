const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode || 500;
  const message = err.message || "Internal Server Error";

  if (!res.headersSent) {
    res.status(statusCode).json({ error: message });
  }
  
};

module.exports = errorHandler;
