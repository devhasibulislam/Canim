import { addCategoryData } from "../../actions/categoryActions";

const addCategory = (categoryData) => {
  return async (dispatch, getState) => {
    const res = await fetch("https://canim.onrender.com/category", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(categoryData),
    });

    const data = await res.json();
    if (data.acknowledgement) {
      dispatch(addCategoryData(data.data));
    }
  };
};

export default addCategory;
