import { displayAllBrandsData } from "../../actions/brandActions";

const displayAllBrands = () => {
  return async (dispatch, getState) => {
    const res = await fetch("https://canim.onrender.com/brand");

    const data = await res.json();
    if (data.acknowledgement) {
      dispatch(displayAllBrandsData(data.data));
    }
  };
};

export default displayAllBrands;
