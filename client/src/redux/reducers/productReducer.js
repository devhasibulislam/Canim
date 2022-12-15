import productActionTypes from "../actionTypes/productActionTypes";

const initialState = {
  products: [],
  product: {},
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    // add new product
    case productActionTypes.ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    // get specific product
    case productActionTypes.DISPLAY_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };

    // get all products
    case productActionTypes.DISPLAY_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    // update specific product
    case productActionTypes.UPDATE_PRODUCT:
      return {
        ...state,
        products: [
          ...state.products,
          state.products.filter(
            (product) => product._id !== action.payload._id
          ),
          action.payload,
        ],
      };

    // remove specific product
    case productActionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product._id !== action.payload._id
        ),
      };

    default:
      return state;
  }
};

export default productReducer;
