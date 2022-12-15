import { updateUserData } from "../../actions/userActions";

function updateUser(userData) {
  return async (dispatch, getState) => {
    const res = await fetch(
      `https://canim.onrender.com/user/update-user?email=${userData.email}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );
    const data = await res.json();

    if (data.acknowledgement) {
      dispatch(updateUserData(data.data));
    }
  };
}

export default updateUser;
