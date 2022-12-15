import { signinUserData } from "../../actions/userActions";

function signinUser(userData) {
  return async (dispatch, getState) => {
    const res = await fetch("https://canim.onrender.com/user/sign-in", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await res.json();

    if (data.acknowledgement) {
      dispatch(signinUserData(data.data));
    }
  };
}

export default signinUser;
