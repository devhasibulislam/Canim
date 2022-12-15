import { updateCategoryData } from "../../actions/categoryActions";

const updateCategory = (category) => {
  return async (dispatch, getState) => {
    const res = await fetch(`https://canim.onrender.com/category/${category._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(category),
    });
    const data = await res.json();

    if (data.acknowledgement) {
      dispatch(updateCategoryData(data.data));
    }
  };
};

export default updateCategory;
