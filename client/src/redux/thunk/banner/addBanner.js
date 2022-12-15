import { addBannerData } from "../../actions/bannerActions";

const addBanner = (bannerData) => {
  return async (dispatch, getState) => {
    const res = await fetch("https://canim.onrender.com/banner", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bannerData),
    });

    const data = await res.json();
    if (data.acknowledgement) {
      dispatch(addBannerData(data.data));
    }
  };
};

export default addBanner;
