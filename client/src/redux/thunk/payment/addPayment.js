import { addPaymentData } from "../../actions/paymentActions";

const addPayment = (paymentData) => {
  return async (dispatch, getState) => {
    const res = await fetch("https://canim.onrender.com/payment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(paymentData),
    });

    const data = await res.json();
    if (data.acknowledgement) {
      dispatch(addPaymentData(data.data));
    }
  };
};

export default addPayment;
