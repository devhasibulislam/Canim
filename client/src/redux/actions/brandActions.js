import brandActionTypes from "../actionTypes/brandActionTypes";

export const addBrandData = (data) => {
  return {
    type: brandActionTypes.ADD_BRAND,
    payload: data,
  };
};

export const displayBrandData = (data) => {
  return {
    type: brandActionTypes.DISPLAY_BRAND,
    payload: data,
  };
};

export const displayAllBrandsData = (data) => {
  return {
    type: brandActionTypes.DISPLAY_BRANDS,
    payload: data,
  };
};

export const updateBrandData = (data) => {
  return {
    type: brandActionTypes.UPDATE_BRAND,
    payload: data,
  };
};

export const removeBrandData = (_id) => {
  return {
    type: brandActionTypes.REMOVE_BRAND,
    payload: {
      _id: _id,
    },
  };
};
