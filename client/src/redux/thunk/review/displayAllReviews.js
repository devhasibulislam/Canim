import { displayAllReviewsData } from "../../actions/reviewActions";

const displayAllReviews = () => {
  return async (dispatch, getState) => {
    const res = await fetch("https://canim.onrender.com/review");

    const data = await res.json();
    if (data.acknowledgement) {
      dispatch(displayAllReviewsData(data.data));
    }
  };
};

export default displayAllReviews;
