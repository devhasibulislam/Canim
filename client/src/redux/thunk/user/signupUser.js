import { signupUserData } from "../../actions/userActions";

function signupUser(userData) {
  return async (dispatch, getState) => {
    const res = await fetch("https://canim.onrender.com/user/sign-up", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await res.json();

    if (data.acknowledgement) {
      dispatch(signupUserData(data.data));
    }
  };
}

export default signupUser;
