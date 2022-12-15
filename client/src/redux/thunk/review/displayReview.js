import { displayReviewData } from "../../actions/reviewActions";

const displayReview = (_id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`https://canim.onrender.com/review/${_id}`);

    const data = await res.json();
    if (data.acknowledgement) {
      dispatch(displayReviewData(data.data));
    }
  };
};

export default displayReview;
