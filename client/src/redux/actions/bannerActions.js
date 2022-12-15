import bannerActionTypes from "../actionTypes/bannerActionTypes";

// add new banner
export const addBannerData = (data) => {
  return {
    type: bannerActionTypes.ADD_BANNER,
    payload: data,
  };
};

// display specific banner
export const displayBannerData = (data) => {
  return {
    type: bannerActionTypes.DISPLAY_BANNER,
    payload: data,
  };
};

// display all banners
export const displayAllBannersData = (data) => {
  return {
    type: bannerActionTypes.DISPLAY_BANNERS,
    payload: data,
  };
};

// update specific banner
export const updateBannerData = (data) => {
  return {
    type: bannerActionTypes.UPDATE_BANNER,
    payload: data,
  };
};

// remove specific banner
export const removeBannerData = (_id) => {
  return {
    type: bannerActionTypes.REMOVE_BANNER,
    payload: {
      _id: _id,
    },
  };
};
