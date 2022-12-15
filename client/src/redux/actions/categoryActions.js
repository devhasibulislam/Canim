import categoryActionTypes from "../actionTypes/categoryActionTypes";

export const addCategoryData = (data) => {
  return {
    type: categoryActionTypes.ADD_CATEGORY,
    payload: data,
  };
};

export const displayCategoryData = (data) => {
  return {
    type: categoryActionTypes.DISPLAY_CATEGORY,
    payload: data,
  };
};

export const displayAllCategoriesData = (data) => {
  return {
    type: categoryActionTypes.DISPLAY_CATEGORIES,
    payload: data,
  };
};

export const updateCategoryData = (data) => {
  return {
    type: categoryActionTypes.UPDATE_CATEGORY,
    payload: data,
  };
};

export const removeCategoryData = (_id) => {
  return {
    type: categoryActionTypes.REMOVE_CATEGORY,
    payload: {
      _id: _id,
    },
  };
};
