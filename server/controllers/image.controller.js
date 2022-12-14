/* internal import */
const removeImage = require("../services/image.service");

/* upload an image */
const imageUpload = async (req, res, next) => {
  try {
    const result = req.file;

    res.status(201).json({
      acknowledgement: true,
      message: "Created",
      description: "Insertion successful",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* update an image */
const imageUpdate = async (req, res, next) => {
  try {
    await removeImage(req.query.public_id);
    const result = req.file;

    res.status(202).json({
      acknowledgement: true,
      message: "Accepted",
      description: "Uprating successful",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* export cloudinary uploader and updater */
module.exports = { imageUpload, imageUpdate };
