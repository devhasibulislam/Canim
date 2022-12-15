import { addReviewData } from "../../actions/reviewActions";

const addReview = (storeData) => {
  return async (dispatch, getState) => {
    const res = await fetch("https://canim.onrender.com/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(storeData),
    });

    const data = await res.json();
    if (data.acknowledgement) {
      dispatch(addReviewData(data.data));
    }
  };
};

export default addReview;
