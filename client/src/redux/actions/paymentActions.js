import paymentActionTypes from "../actionTypes/paymentActionTypes";

export const addPaymentData = (data) => {
  return {
    type: paymentActionTypes.ADD_PAYMENT,
    payload: data,
  };
};

export const displayPaymentData = (data) => {
  return {
    type: paymentActionTypes.DISPLAY_PAYMENT,
    payload: data,
  };
};

export const displayAllPaymentsData = (data) => {
  return {
    type: paymentActionTypes.DISPLAY_PAYMENTS,
    payload: data,
  };
};

export const updatePaymentData = (data) => {
  return {
    type: paymentActionTypes.UPDATE_PAYMENT,
    payload: data,
  };
};

export const removePaymentData = (_id) => {
  return {
    type: paymentActionTypes.REMOVE_PAYMENT,
    payload: {
      _id: _id,
    },
  };
};
