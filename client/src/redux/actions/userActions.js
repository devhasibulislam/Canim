import userActionTypes from "../actionTypes/userActionTypes";

export const signupUserData = (data) => {
  return {
    type: userActionTypes.SIGN_UP,
    payload: data,
  };
};

export const signinUserData = (data) => {
  return {
    type: userActionTypes.SIGN_IN,
    payload: data,
  };
};

export const resetPasswordData = (data) => {
  return {
    type: userActionTypes.RESET_PASSWORD,
    payload: data,
  };
};

export const persistMyAccountData = (data) => {
  return {
    type: userActionTypes.PERSIST_MYSELF,
    payload: data,
  };
};

export const displayQueryUsersData = (data) => {
  return {
    type: userActionTypes.QUERY_USERS,
    payload: data,
  };
};

export const displayAllUsersData = (data) => {
  return {
    type: userActionTypes.DISPLAY_ALL_USERS,
    payload: data,
  };
};

export const displayUserData = (data) => {
  return {
    type: userActionTypes.DISPLAY_USER,
    payload: data,
  };
};

export const updateUserData = (data) => {
  return {
    type: userActionTypes.UPDATE_USER,
    payload: data,
  };
};

export const removeUserData = (_id) => {
  return {
    type: userActionTypes.REMOVE_USER,
    payload: {
      _id: _id,
    },
  };
};
