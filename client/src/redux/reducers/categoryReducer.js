import categoryActionTypes from "../actionTypes/categoryActionTypes";

const initialState = {
  categories: [],
  category: {},
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    // add new category
    case categoryActionTypes.ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };

    // get specific category
    case categoryActionTypes.DISPLAY_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };

    // get all categories
    case categoryActionTypes.DISPLAY_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };

    // update specific category
    case categoryActionTypes.UPDATE_CATEGORY:
      return {
        ...state,
        categories: [
          ...state.categories,
          state.categories.filter(
            (category) => category._id !== action.payload._id
          ),
          action.payload,
        ],
      };

    // remove specific category
    case categoryActionTypes.REMOVE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter(
          (category) => category._id !== action.payload._id
        ),
      };

    default:
      return state;
  }
};

export default categoryReducer;
