/* internal imports */
const Banner = require("../models/Banner");
const imageRemover = require("../utils/imageRemover.util");

// display all banner
exports.displayAllBanners = async () => {
  const result = await Banner.find();
  return result;
};

// insert new banner
exports.insertNewBanner = async (data) => {
  const result = await Banner.create(data);
  return result;
};

// display specific banner
exports.displaySpecificBanner = async ({ id }) => {
  const result = await Banner.findById(id);
  return result;
};

// modify specific banner
exports.modifySpecificBanner = async (id, data) => {
  const result = await Banner.updateOne(
    { _id: id },
    { $set: data },
    { upsert: true, runValidators: true }
  );
  return result;
};

// remove specific banner
exports.removeSpecificBanner = async ({ id }) => {
  const result = await Banner.findByIdAndDelete(id);

  if (result.thumbnail.public_id) {
    const public_id = result.thumbnail.public_id;
    await imageRemover(public_id);
  }

  return result;
};
