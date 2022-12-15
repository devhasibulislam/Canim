import { displayAllCategoriesData } from "../../actions/categoryActions";

const displayAllCategories = () => {
  return async (dispatch, getState) => {
    const res = await fetch("https://canim.onrender.com/category");

    const data = await res.json();
    if (data.acknowledgement) {
      dispatch(displayAllCategoriesData(data.data));
    }
  };
};

export default displayAllCategories;
