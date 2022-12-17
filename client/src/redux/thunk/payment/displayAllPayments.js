import { displayAllPaymentsData } from "../../actions/paymentActions";

const displayAllPayments = () => {
  return async (dispatch, getState) => {
    const res = await fetch("https://canim.onrender.com/payment");

    const data = await res.json();
    if (data.acknowledgement) {
      dispatch(displayAllPaymentsData(data.data));
    }
  };
};

export default displayAllPayments;
