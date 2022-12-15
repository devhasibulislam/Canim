import { removeBrandData } from "../../actions/brandActions";

const removeBrand = (_id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`https://canim.onrender.com/brand/${_id}`, {
      method: "DELETE",
    });
    const data = await res.json();

    if (data.acknowledgement) {
      dispatch(removeBrandData(_id));
    }
  };
};

export default removeBrand;
