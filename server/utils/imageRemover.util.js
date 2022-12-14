/* external import */
const cloudinary = require("cloudinary");

/* remove image from cloudinary */
const imageRemover = async (public_id) => {
  await cloudinary.uploader.destroy(public_id);
};

module.exports = imageRemover;
