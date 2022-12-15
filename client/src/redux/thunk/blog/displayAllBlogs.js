import { displayAllBlogsData } from "../../actions/blogActions";

const displayAllBlogs = () => {
  return async (dispatch, getState) => {
    const res = await fetch("https://canim.onrender.com/blog");

    const data = await res.json();
    if (data.acknowledgement) {
      dispatch(displayAllBlogsData(data.data));
    }
  };
};

export default displayAllBlogs;
