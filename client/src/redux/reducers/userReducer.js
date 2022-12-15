import userActionTypes from "../actionTypes/userActionTypes";

const initialState = {
  users: [],
  user: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // add new user
    case userActionTypes.SIGN_UP:
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    //   display all users
    case userActionTypes.DISPLAY_ALL_USERS:
      return {
        ...state,
        users: action.payload,
      };
    
      //   display user
    case userActionTypes.DISPLAY_USER:
      return {
        ...state,
        user: action.payload,
      };

    //   query users
    case userActionTypes.QUERY_USERS:
      return {
        ...state,
        users: action.payload,
      };

    //   reset account password
    case userActionTypes.RESET_PASSWORD:
      return {
        ...state,
        users: [
          ...state.users,
          state.users.filter((user) => user._id !== action.payload._id),
          action.payload,
        ],
      };

    //   signed in user
    case userActionTypes.SIGN_IN:
      return {
        ...state,
        user: action.payload,
      };

    //   persist myself as logged in
    case userActionTypes.PERSIST_MYSELF:
      return {
        ...state,
        user: action.payload,
      };

    //   update user info
    case userActionTypes.UPDATE_USER:
      return {
        ...state,
        users: [
          ...state.users,
          state.users.filter((user) => user._id !== action.payload._id),
          action.payload,
        ],
      };

    //   remove user credentials
    case userActionTypes.REMOVE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user._id !== action.payload._id),
      };

    default:
      return state;
  }
};

export default userReducer;
