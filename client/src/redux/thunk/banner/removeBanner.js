import { removeBannerData } from "../../actions/bannerActions";

const removeBanner = (_id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`https://canim.onrender.com/banner/${_id}`, {
      method: "DELETE",
    });
    const data = await res.json();

    if (data.acknowledgement) {
      dispatch(removeBannerData(_id));
    }
  };
};

export default removeBanner;
