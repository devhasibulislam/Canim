import reviewActionTypes from "../actionTypes/reviewActionTypes";

const initialState = {
  reviews: [],
  review: {},
};

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    // add new review
    case reviewActionTypes.ADD_REVIEW:
      return {
        ...state,
        reviews: [...state.reviews, action.payload],
      };

    // get specific review
    case reviewActionTypes.DISPLAY_REVIEW:
      return {
        ...state,
        review: action.payload,
      };

    // get all reviews
    case reviewActionTypes.DISPLAY_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };

    // update specific review
    case reviewActionTypes.UPDATE_REVIEW:
      return {
        ...state,
        reviews: [
          ...state.reviews,
          state.reviews.filter((review) => review._id !== action.payload._id),
          action.payload,
        ],
      };

    // remove specific review
    case reviewActionTypes.REMOVE_REVIEW:
      return {
        ...state,
        reviews: state.reviews.filter(
          (review) => review._id !== action.payload._id
        ),
      };

    default:
      return state;
  }
};

export default reviewReducer;
