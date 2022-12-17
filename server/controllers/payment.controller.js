/* internal import */
const paymentService = require("../services/payment.service");

exports.insertNewPaymentMethod = async (req, res, next) => {
  try {
    const result = await paymentService.insertNewPaymentMethod(req.body);

    res.status(201).json({
      acknowledgement: true,
      message: "Created",
      description: "New payment method insert successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

exports.getAllPayments = async (req, res, next) => {
  try {
    const result = await paymentService.getAllPayments(req.body);

    res.status(201).json({
      acknowledgement: true,
      message: "OK",
      description: "Fetching all payments successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

exports.modifyPaymentMethod = async (req, res, next) => {
  try {
    const result = await paymentService.modifyPaymentMethod(
      req.params.id,
      req.body
    );

    res.status(201).json({
      acknowledgement: true,
      message: "Accepted",
      description: "Updating payment successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

exports.displayPaymentMethod = async (req, res, next) => {
  try {
    const result = await paymentService.displayPaymentMethod(req.params.id);

    res.status(201).json({
      acknowledgement: true,
      message: "OK",
      description: "Fetching all payments successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

exports.removePaymentMethod = async (req, res, next) => {
  try {
    const result = await paymentService.removePaymentMethod(req.params.id);

    res.status(201).json({
      acknowledgement: true,
      message: "OK",
      description: "Remove payment successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
