/* internal import */
const Blog = require("../models/Blog");
const imageRemover = require("../utils/imageRemover.util");

/* insert a new blog */
exports.insertNewBlog = async (data) => {
  const result = await Blog.create(data);
  return result;
};

/* display all blogs */
exports.displayAllBlogs = async () => {
  const result = await Blog.find();
  return result;
};

/* display specific blog */
exports.displaySpecificBlogs = async ({ id }) => {
  const result = await Blog.findById(id);
  return result;
};

/* update specific blog */
exports.updateSpecificBlog = async (id, data) => {
  const result = await Blog.updateOne(
    { _id: id },
    { $set: data },
    { upsert: true, runValidators: true }
  );
  return result;
};

// remove specific blog
exports.removeSpecificBlog = async ({ id }) => {
  const result = await Blog.findByIdAndDelete(id);

  if (result.thumbnail.public_id) {
    const public_id = result.thumbnail.public_id;
    await imageRemover(public_id);
  }

  return result;
};
