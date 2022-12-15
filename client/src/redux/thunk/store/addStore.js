import { addStoreData } from "../../actions/storeActions";

const addStore = (storeData) => {
  return async (dispatch, getState) => {
    const res = await fetch("https://canim.onrender.com/store", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(storeData),
    });

    const data = await res.json();
    if (data.acknowledgement) {
      dispatch(addStoreData(data.data));
    }
  };
};

export default addStore;
