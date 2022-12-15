import { updateBlogData } from "../../actions/blogActions";

const updateBlog = (blog) => {
  return async (dispatch, getState) => {
    const res = await fetch(`https://canim.onrender.com/blog/${blog._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(blog),
    });
    const data = await res.json();

    if (data.acknowledgement) {
      dispatch(updateBlogData(data.data));
    }
  };
};

export default updateBlog;
