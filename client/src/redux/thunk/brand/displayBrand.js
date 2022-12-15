import { displayBrandData } from "../../actions/brandActions";

const displayBrand = (_id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`https://canim.onrender.com/brand/${_id}`);

    const data = await res.json();
    if (data.acknowledgement) {
      dispatch(displayBrandData(data.data));
    }
  };
};

export default displayBrand;
