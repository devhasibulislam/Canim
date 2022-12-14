/* internal import */
const Product = require("../models/Product");
const imageRemover = require("../utils/imageRemover.util");

// remove thumbnails
async function productThumbnailsRemove(thumbnails) {
  for (let i = 0; i < thumbnails.length; i++)
    await imageRemover(thumbnails[i]?.public_id);
}

// product thumbnails update
exports.productThumbnailsUpdate = async ({ _id }) => {
  const product = await Product.findById(_id);
  if (product.thumbnails.length) productThumbnailsRemove(product.thumbnails);
};

/* insert new product */
exports.insertNewProduct = async (data) => {
  const result = await Product.create(data);
  return result;
};

/* display all products */
exports.displayAllProducts = async () => {
  const result = await Product.find()
    .sort("-createdAt")
    .populate([
      {
        path: "category",
        select: "thumbnail title _id",
      },
      {
        path: "brand",
        select: "logo title _id",
      },
      {
        path: "store",
        select: "thumbnail title _id",
      },
    ]);
  return result;
};

/* display specific product */
exports.displaySpecificProduct = async ({ id }) => {
  const result = await Product.findById(id).populate([
    {
      path: "category",
      select: "thumbnail title _id",
    },
    {
      path: "brand",
      select: "logo title _id",
    },
    {
      path: "store",
      select: "thumbnail title _id",
    },
  ]);
  return result;
};

/* update specific product */
exports.updateSpecificProduct = async (id, data) => {
  const product = await Product.findById(id);

  const result = await Product.updateOne(
    { _id: id },
    { $set: data },
    { upsert: false, runValidators: true }
  );
  return result;
};

/* remove specific product */
exports.removeSpecificProduct = async ({ id }) => {
  const result = await Product.findByIdAndDelete(id);
  if (result.thumbnails.length) productThumbnailsRemove(result.thumbnails);
  return result;
};
