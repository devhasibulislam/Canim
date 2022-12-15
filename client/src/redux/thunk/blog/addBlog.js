import { addBlogData } from "../../actions/blogActions";

const addBlog = (blogData) => {
  return async (dispatch, getState) => {
    const res = await fetch("https://canim.onrender.com/blog", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(blogData),
    });

    const data = await res.json();
    if (data.acknowledgement) {
      dispatch(addBlogData(data.data));
    }
  };
};

export default addBlog;
