import { updateStoreData } from "../../actions/storeActions";

const updateStore = (store) => {
  return async (dispatch, getState) => {
    const res = await fetch(`https://canim.onrender.com/store/${store._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(store),
    });
    const data = await res.json();

    if (data.acknowledgement) {
      dispatch(updateStoreData(data.data));
    }
  };
};

export default updateStore;
