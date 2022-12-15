import { displayBlogData } from "../../actions/blogActions";

const displayBlog = (_id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`https://canim.onrender.com/blog/${_id}`);

    const data = await res.json();
    if (data.acknowledgement) {
      dispatch(displayBlogData(data.data));
    }
  };
};

export default displayBlog;
