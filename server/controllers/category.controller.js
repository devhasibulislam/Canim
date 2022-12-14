/* internal import */
const categoryService = require("../services/category.service");

/* insert new category */
exports.insertNewCategory = async (req, res, next) => {
  try {
    const result = await categoryService.insertNewCategory(req.body);

    res.status(201).json({
      acknowledgement: true,
      message: "Created",
      description: "New category insert successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* display all categories */
exports.displayAllCategories = async (req, res, next) => {
  try {
    const result = await categoryService.displayAllCategories();

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      count: result.length,
      description: "Successfully fetch all categories",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* display specific category */
exports.displaySpecificCategory = async (req, res, next) => {
  try {
    const result = await categoryService.displaySpecificCategory(req.params);

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "Successfully fetch specific category",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* update specific category */
exports.updateSpecificCategory = async (req, res, next) => {
  try {
    const result = await categoryService.updateSpecificCategory(
      req.params.id,
      req.body
    );

    res.status(202).json({
      acknowledgement: true,
      message: "Accepted",
      description: "Successfully update specific category",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* remove specific category */
exports.removeSpecificCategory = async (req, res, next) => {
  try {
    const result = await categoryService.removeSpecificCategory(req.params);

    res.status(202).json({
      acknowledgement: true,
      message: "Accepted",
      description: "Successfully remove specific category",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
