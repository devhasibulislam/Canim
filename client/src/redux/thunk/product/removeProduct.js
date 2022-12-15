import { removeProductData } from "../../actions/productActions";

const removeProduct = (_id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`https://canim.onrender.com/product/${_id}`, {
      method: "DELETE",
    });
    const data = await res.json();

    if (data.acknowledgement) {
      dispatch(removeProductData(_id));
    }
  };
};

export default removeProduct;
