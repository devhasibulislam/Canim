import { displayBannerData } from "../../actions/bannerActions";

const displayBanner = (_id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`https://canim.onrender.com/banner/${_id}`);

    const data = await res.json();
    if (data.acknowledgement) {
      dispatch(displayBannerData(data.data));
    }
  };
};

export default displayBanner;
