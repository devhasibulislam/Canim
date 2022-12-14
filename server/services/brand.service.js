/* internal import */
const Brand = require("../models/Brand");
const imageRemover = require("../utils/imageRemover.util");

/* insert new brand */
exports.insertNewBrand = async (data) => {
  const result = await Brand.create(data);
  return result;
};

/* display all brands */
exports.displayAllBrands = async () => {
  const result = await Brand.find();
  return result;
};

/* display specific brand */
exports.displaySpecificBrand = async ({ id }) => {
  const result = await Brand.findById(id);
  return result;
};

/* update specific brand */
exports.updateSpecificBrand = async (id, data) => {
  const result = await Brand.updateOne(
    { _id: id },
    { $set: data },
    { upsert: true, runValidators: true }
  );
  return result;
};

/* remove specific brand */
exports.removeSpecificBrand = async ({ id }) => {
  const result = await Brand.findByIdAndDelete(id);

  if (result.logo.public_id) {
    const public_id = result.logo.public_id;
    await imageRemover(public_id);
  }

  return result;
};
