import reviewActionTypes from "../actionTypes/reviewActionTypes";

export const addReviewData = (data) => {
  return {
    type: reviewActionTypes.ADD_REVIEW,
    payload: data,
  };
};

export const displayReviewData = (data) => {
  return {
    type: reviewActionTypes.DISPLAY_REVIEW,
    payload: data,
  };
};

export const displayAllReviewsData = (data) => {
  return {
    type: reviewActionTypes.DISPLAY_REVIEWS,
    payload: data,
  };
};

export const updateReviewData = (data) => {
  return {
    type: reviewActionTypes.UPDATE_REVIEW,
    payload: data,
  };
};

export const removeReviewData = (_id) => {
  return {
    type: reviewActionTypes.REMOVE_REVIEW,
    payload: {
      _id: _id,
    },
  };
};
