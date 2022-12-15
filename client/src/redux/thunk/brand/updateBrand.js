import { updateBrandData } from "../../actions/brandActions";

const updateBrand = (brand) => {
  return async (dispatch, getState) => {
    const res = await fetch(`https://canim.onrender.com/brand/${brand._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(brand),
    });
    const data = await res.json();

    if (data.acknowledgement) {
      dispatch(updateBrandData(data.data));
    }
  };
};

export default updateBrand;
