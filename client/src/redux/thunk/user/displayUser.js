import { displayUserData } from "../../actions/userActions";

function displayUser(_id) {
  return async (dispatch, getState) => {
    const res = await fetch(`https://canim.onrender.com/user/${_id}`);
    const data = await res.json();

    if (data.acknowledgement) {
      dispatch(displayUserData(data.data));
    }
  };
}

export default displayUser;
