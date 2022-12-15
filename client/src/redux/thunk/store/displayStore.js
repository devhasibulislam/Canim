import { displayStoreData } from "../../actions/storeActions";

const displayStore = (_id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`https://canim.onrender.com/store/${_id}`);

    const data = await res.json();
    if (data.acknowledgement) {
      dispatch(displayStoreData(data.data));
    }
  };
};

export default displayStore;
