import { addProductData } from "../../actions/productActions";

const addProduct = (productData) => {
  return async (dispatch, getState) => {
    const res = await fetch("https://canim.onrender.com/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    const data = await res.json();
    if (data.acknowledgement) {
      dispatch(addProductData(data.data));
    }
  };
};

export default addProduct;
