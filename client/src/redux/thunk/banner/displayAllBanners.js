import { displayAllBannersData } from "../../actions/bannerActions";

const displayAllBanners = () => {
  return async (dispatch, getState) => {
    const res = await fetch("https://canim.onrender.com/banner");

    const data = await res.json();
    if (data.acknowledgement) {
      dispatch(displayAllBannersData(data.data));
    }
  };
};

export default displayAllBanners;
