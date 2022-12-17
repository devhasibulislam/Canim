const Payment = require("../models/Payment");

exports.insertNewPaymentMethod = async (data) => {
  const result = await Payment.create(data);
  return result;
};

exports.getAllPayments = async () => {
  const result = await Payment.find().populate({
    path: "user",
    select: "avatar name email phone role _id",
  });
  return result;
};

exports.modifyPaymentMethod = async (id, data) => {
  const result = await Payment.findByIdAndUpdate(id, data, {
    upsert: true,
    runValidators: true,
  });
  return result;
};

exports.displayPaymentMethod = async (id) => {
  const result = await Payment.findById(id).populate({
    path: "user",
    select: "avatar name email phone role _id",
  });
  return result;
};

exports.removePaymentMethod = async (id) => {
  const result = await Payment.findByIdAndRemove(id);
  return result;
};
