import { persistMyAccountData } from "../../actions/userActions";

function persistMyAccount() {
  return async (dispatch, getState) => {
    const res = await fetch("https://canim.onrender.com/user/myself", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage?.getItem("accessToken")}`,
      },
    });
    const data = await res.json();

    if (data.acknowledgement) {
      dispatch(persistMyAccountData(data.data));
    }
  };
}

export default persistMyAccount;
