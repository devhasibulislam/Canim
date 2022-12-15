import { updateReviewData } from "../../actions/reviewActions";

const updateReview = (store) => {
  return async (dispatch, getState) => {
    const res = await fetch(`https://canim.onrender.com/review/${store._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(store),
    });
    const data = await res.json();

    if (data.acknowledgement) {
      dispatch(updateReviewData(data.data));
    }
  };
};

export default updateReview;
