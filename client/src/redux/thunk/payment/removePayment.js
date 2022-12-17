import { removePaymentData } from "../../actions/paymentActions";

const removePayment = (_id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`https://canim.onrender.com/payment/${_id}`, {
      method: "DELETE",
    });
    const data = await res.json();

    if (data.acknowledgement) {
      dispatch(removePaymentData(_id));
    }
  };
};

export default removePayment;
