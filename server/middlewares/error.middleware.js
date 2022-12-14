const error = async (err, req, res, next) => {
  res.status(500).json({
    acknowledgement: false,
    message: err.name,
    description: err.message,
  });
};

module.exports = error;
