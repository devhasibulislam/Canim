import paymentActionTypes from "../actionTypes/paymentActionTypes";

const initialState = {
  payments: [],
  payment: {},
};

const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    // add new payment
    case paymentActionTypes.ADD_PAYMENT:
      return {
        ...state,
        payments: [...state.payments, action.payload],
      };

    // get specific payment
    case paymentActionTypes.DISPLAY_PAYMENT:
      return {
        ...state,
        payment: action.payload,
      };

    // get all payments
    case paymentActionTypes.DISPLAY_PAYMENTS:
      return {
        ...state,
        payments: action.payload,
      };

    // update specific payment
    case paymentActionTypes.UPDATE_PAYMENT:
      return {
        ...state,
        payments: [
          ...state.payments,
          state.payments.filter((payment) => payment._id !== action.payload._id),
          action.payload,
        ],
      };

    // remove specific payment
    case paymentActionTypes.REMOVE_PAYMENT:
      return {
        ...state,
        payments: state.payments.filter(
          (payment) => payment._id !== action.payload._id
        ),
      };

    default:
      return state;
  }
};

export default paymentReducer;
