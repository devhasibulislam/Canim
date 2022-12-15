import { removeCategoryData } from "../../actions/categoryActions";

const removeCategory = (_id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`https://canim.onrender.com/category/${_id}`, {
      method: "DELETE",
    });
    const data = await res.json();

    if (data.acknowledgement) {
      dispatch(removeCategoryData(_id));
    }
  };
};

export default removeCategory;
