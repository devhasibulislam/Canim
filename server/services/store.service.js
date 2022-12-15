/* internal import */
const Store = require("../models/Store");
const imageRemover = require("../utils/imageRemover.util");

/* insert new store */
exports.insertNewStore = async (data) => {
  const result = await Store.create(data);
  return result;
};

/* display all store */
exports.displayAllStore = async () => {
  const result = await Store.find().sort("-createdAt").populate({
    path: "seller",
    select: "avatar name role _id",
  });
  return result;
};

/* display specific store */
exports.displaySpecificStore = async ({ id }) => {
  const result = await Store.findById(id).populate({
    path: "seller",
    select: "avatar name role -_id",
  });
  return result;
};

/* update specific store */
exports.updateSpecificStore = async (id, data) => {
  const result = await Store.updateOne(
    { _id: id },
    { $set: data },
    { upsert: true, runValidators: true }
  );
  return result;
};

/* remove specific store */
exports.removeSpecificStore = async ({ id }) => {
  const result = await Store.findByIdAndDelete(id);

  if (result.thumbnail.public_id) {
    const public_id = result.thumbnail.public_id;
    await imageRemover(public_id);
  }

  return result;
};
