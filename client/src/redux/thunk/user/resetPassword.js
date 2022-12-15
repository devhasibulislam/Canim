import { resetPasswordData } from "../../actions/userActions";

function resetPassword(userData) {
  return async (dispatch, getState) => {
    const res = await fetch("https://canim.onrender.com/user/reset-password", {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await res.json();

    if (data.acknowledgement) {
      dispatch(resetPasswordData(data.data));
    }
  };
}

export default resetPassword;
