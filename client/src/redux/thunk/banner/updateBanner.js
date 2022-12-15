import { updateBannerData } from "../../actions/bannerActions";

const updateBanner = (banner) => {
  return async (dispatch, getState) => {
    const res = await fetch(`https://canim.onrender.com/banner/${banner._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(banner),
    });
    const data = await res.json();

    if (data.acknowledgement) {
      dispatch(updateBannerData(data.data));
    }
  };
};

export default updateBanner;
