/* internal import */
const Category = require("../models/Category");
const imageRemover = require("../utils/imageRemover.util");

/* insert new category */
exports.insertNewCategory = async (data) => {
  const result = await Category.create(data);
  return result;
};

/* display all categories */
exports.displayAllCategories = async () => {
  const result = await Category.find().sort("-createdAt");
  return result;
};

/* display specific category */
exports.displaySpecificCategory = async ({ id }) => {
  const result = await Category.findById(id);
  return result;
};

/* update specific category */
exports.updateSpecificCategory = async (id, data) => {
  const result = await Category.updateOne(
    { _id: id },
    { $set: data },
    { upsert: true, runValidators: true }
  );
  return result;
};

/* remove specific category */
exports.removeSpecificCategory = async ({ id }) => {
  const result = await Category.findByIdAndDelete(id);

  if (result.thumbnail.public_id) {
    const public_id = result.thumbnail.public_id;
    await imageRemover(public_id);
  }

  return result;
};
