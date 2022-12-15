import { removeBlogData } from "../../actions/blogActions";

const removeBlog = (_id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`https://canim.onrender.com/blog/${_id}`, {
      method: "DELETE",
    });
    const data = await res.json();

    if (data.acknowledgement) {
      dispatch(removeBlogData(_id));
    }
  };
};

export default removeBlog;
