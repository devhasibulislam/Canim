import { updateProductData } from "../../actions/productActions";

const updateProduct = (product) => {
  return async (dispatch, getState) => {
    const res = await fetch(`https://canim.onrender.com/product/${product._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const data = await res.json();

    if (data.acknowledgement) {
      dispatch(updateProductData(data.data));
    }
  };
};

export default updateProduct;
