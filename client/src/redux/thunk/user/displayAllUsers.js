import { displayAllUsersData } from "../../actions/userActions";

function displayAllUsers() {
  return async (dispatch, getState) => {
    const res = await fetch("https://canim.onrender.com/user/all-users");
    const data = await res.json();

    if (data.acknowledgement) {
      dispatch(displayAllUsersData(data.data));
    }
  };
}

export default displayAllUsers;
