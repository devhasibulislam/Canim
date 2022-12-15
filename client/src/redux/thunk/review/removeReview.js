import { removeReviewData } from "../../actions/reviewActions";

const removeReview = (_id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`https://canim.onrender.com/review/${_id}`, {
      method: "DELETE",
    });
    const data = await res.json();

    if (data.acknowledgement) {
      dispatch(removeReviewData(_id));
    }
  };
};

export default removeReview;
