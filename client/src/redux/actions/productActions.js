import productActionTypes from "../actionTypes/productActionTypes";

export const addProductData = (data) => {
  return {
    type: productActionTypes.ADD_PRODUCT,
    payload: data,
  };
};

export const displayProductData = (data) => {
  return {
    type: productActionTypes.DISPLAY_PRODUCT,
    payload: data,
  };
};

export const displayAllProductsData = (data) => {
  return {
    type: productActionTypes.DISPLAY_PRODUCTS,
    payload: data,
  };
};

export const updateProductData = (data) => {
  return {
    type: productActionTypes.UPDATE_PRODUCT,
    payload: data,
  };
};

export const removeProductData = (_id) => {
  return {
    type: productActionTypes.REMOVE_PRODUCT,
    payload: {
      _id: _id,
    },
  };
};
