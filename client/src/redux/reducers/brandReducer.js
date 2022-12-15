import brandActionTypes from "../actionTypes/brandActionTypes";

const initialState = {
  brands: [],
  brand: {},
};

const brandReducer = (state = initialState, action) => {
  switch (action.type) {
    // add new brand
    case brandActionTypes.ADD_BRAND:
      return {
        ...state,
        brands: [...state.brands, action.payload],
      };

    // get specific brand
    case brandActionTypes.DISPLAY_BRAND:
      return {
        ...state,
        brand: action.payload,
      };

    // get all brands
    case brandActionTypes.DISPLAY_BRANDS:
      return {
        ...state,
        brands: action.payload,
      };

    // update specific brand
    case brandActionTypes.UPDATE_BRAND:
      return {
        ...state,
        brands: [
          ...state.brands,
          state.brands.filter((brand) => brand._id !== action.payload._id),
          action.payload,
        ],
      };

    // remove specific brand
    case brandActionTypes.REMOVE_BRAND:
      return {
        ...state,
        brands: state.brands.filter((brand) => brand._id !== action.payload._id),
      };

    default:
      return state;
  }
};

export default brandReducer;
