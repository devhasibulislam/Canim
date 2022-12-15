import { removeUserData } from "../../actions/userActions";

function removeUser(_id) {
  return async (dispatch, getState) => {
    const res = await fetch(`https://canim.onrender.com/user/remove-user?id=${_id}`, {
      method: "DELETE",
    });
    const data = await res.json();

    if (data.acknowledgement) {
      dispatch(removeUserData(_id));
    }
  };
}

export default removeUser;
