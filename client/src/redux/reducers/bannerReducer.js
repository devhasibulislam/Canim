import bannerActionTypes from "../actionTypes/bannerActionTypes";

const initialState = {
  banners: [],
  banner: {},
};

const bannerReducer = (state = initialState, action) => {
  switch (action.type) {
    // add new banner
    case bannerActionTypes.ADD_BANNER:
      return {
        ...state,
        banners: [...state.banners, action.payload],
      };

    // get specific banner
    case bannerActionTypes.DISPLAY_BANNER:
      return {
        ...state,
        banner: action.payload,
      };

    // get all banners
    case bannerActionTypes.DISPLAY_BANNERS:
      return {
        ...state,
        banners: action.payload,
      };

    // update specific banner
    case bannerActionTypes.UPDATE_BANNER:
      return {
        ...state,
        banners: [
          ...state.banners,
          state.banners.filter((banner) => banner._id !== action.payload._id),
          action.payload,
        ],
      };

    // remove specific banner
    case bannerActionTypes.REMOVE_BANNER:
      return {
        ...state,
        banners: state.banners.filter((banner) => banner._id !== action.payload._id),
      };

    default:
      return state;
  }
};

export default bannerReducer;
