import { updatePaymentData } from "../../actions/paymentActions";

const updatePayment = (payment) => {
  return async (dispatch, getState) => {
    const res = await fetch(
      `https://canim.onrender.com/payment/${payment._id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      }
    );
    const data = await res.json();

    if (data.acknowledgement) {
      dispatch(updatePaymentData(data.data));
    }
  };
};

export default updatePayment;
