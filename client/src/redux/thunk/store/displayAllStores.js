import { displayAllStoresData } from "../../actions/storeActions";

const displayAllStores = () => {
  return async (dispatch, getState) => {
    const res = await fetch("https://canim.onrender.com/store");

    const data = await res.json();
    if (data.acknowledgement) {
      dispatch(displayAllStoresData(data.data));
    }
  };
};

export default displayAllStores;
