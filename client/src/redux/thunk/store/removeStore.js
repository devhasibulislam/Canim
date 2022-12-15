import { removeStoreData } from "../../actions/storeActions";

const removeStore = (_id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`https://canim.onrender.com/store/${_id}`, {
      method: "DELETE",
    });
    const data = await res.json();

    if (data.acknowledgement) {
      dispatch(removeStoreData(_id));
    }
  };
};

export default removeStore;
