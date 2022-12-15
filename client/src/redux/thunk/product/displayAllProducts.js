import { displayAllProductsData } from "../../actions/productActions";

const displayAllProducts = () => {
  return async (dispatch, getState) => {
    const res = await fetch("https://canim.onrender.com/product");

    const data = await res.json();
    if (data.acknowledgement) {
      dispatch(displayAllProductsData(data.data));
    }
  };
};

export default displayAllProducts;
