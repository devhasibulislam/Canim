import { displayQueryUsersData } from "../../actions/userActions";

function displayQueryUsers(query) {
  return async (dispatch, getState) => {
    const res = await fetch(`https://canim.onrender.com/user/query-users?${query}`);
    const data = await res.json();

    if (data.acknowledgement) {
      dispatch(displayQueryUsersData(data.data));
    }
  };
}

export default displayQueryUsers;
