import { displayProductData } from "../../actions/productActions";

const displayProduct = (_id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`https://canim.onrender.com/product/${_id}`);

    const data = await res.json();
    if (data.acknowledgement) {
      dispatch(displayProductData(data.data));
    }
  };
};

export default displayProduct;
