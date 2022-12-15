import { addBrandData } from "../../actions/brandActions";

const addBrand = (brandData) => {
  return async (dispatch, getState) => {
    const res = await fetch("https://canim.onrender.com/brand", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(brandData),
    });

    const data = await res.json();
    if (data.acknowledgement) {
      dispatch(addBrandData(data.data));
    }
  };
};

export default addBrand;
