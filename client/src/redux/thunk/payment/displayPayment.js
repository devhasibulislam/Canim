import { displayPaymentData } from "../../actions/paymentActions";

const displayPayment = (_id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`https://canim.onrender.com/payment/${_id}`);

    const data = await res.json();
    if (data.acknowledgement) {
      dispatch(displayPaymentData(data.data));
    }
  };
};

export default displayPayment;
