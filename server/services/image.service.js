/* internal import */
const imageRemover = require("../utils/imageRemover.util");

/* remove image from cloudinary */
const removeImage = async (public_id) => {
  await imageRemover(public_id);
};

/* export cloudinary remover */
module.exports = removeImage;
