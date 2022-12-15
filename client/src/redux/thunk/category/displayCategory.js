import { displayCategoryData } from "../../actions/categoryActions";

const displayCategory = (_id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`https://canim.onrender.com/category/${_id}`);

    const data = await res.json();
    if (data.acknowledgement) {
      dispatch(displayCategoryData(data.data));
    }
  };
};

export default displayCategory;
