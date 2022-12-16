/* internal export */
const Review = require("../models/Review");

/* insert new review */
exports.insertNewReview = async (data) => {
  const result = await Review.create(data);
  return result;
};

/* display all reviews */
exports.displayAllReviews = async () => {
  const result = await Review.find().sort("-createdAt").populate({
    path: "reviewer",
    select: "avatar name _id",
  });
  return result;
};

/* display specific review */
exports.displaySpecificReview = async ({ id }) => {
  const result = await Review.findById(id).populate({
    path: "reviewer",
    select: "avatar name _id",
  });
  return result;
};

/* update specific review */
exports.updateSpecificReview = async (id, data) => {
  const result = await Review.updateOne(
    { _id: id },
    { $set: data },
    { upsert: true, runValidators: true }
  );
  return result;
};

/* remove specific review */
exports.removeSpecificReview = async ({ id }) => {
  const result = await Review.findByIdAndDelete(id);
  return result;
};
