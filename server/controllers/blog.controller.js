/* internal import */
const blogService = require("../services/blog.service");

/* insert a new blog */
exports.insertNewBlog = async (req, res, next) => {
  try {
    const result = await blogService.insertNewBlog(req.body);

    res.status(201).json({
      acknowledgement: true,
      message: "Created",
      description: "New blog insert successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* display all blogs */
exports.displayAllBlogs = async (req, res, next) => {
  try {
    const result = await blogService.displayAllBlogs();

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "Successfully fetch all blogs",
      count: result.length,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* display specific blog */
exports.displaySpecificBlogs = async (req, res, next) => {
  try {
    const result = await blogService.displaySpecificBlogs(req.params);

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "Successfully fetch specific blog",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* update specific blog */
exports.updateSpecificBlog = async (req, res, next) => {
  try {
    const result = await blogService.updateSpecificBlog(
      req.params.id,
      req.body
    );

    res.status(202).json({
      acknowledgement: true,
      message: "Accepted",
      description: "Successfully update specific blog",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* remove specific blog */
exports.removeSpecificBlog = async (req, res, next) => {
  try {
    const result = await blogService.removeSpecificBlog(req.params);

    res.status(202).json({
      acknowledgement: true,
      message: "Accepted",
      description: "Successfully remove specific blog",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
