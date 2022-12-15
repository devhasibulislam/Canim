import storeActionTypes from "../actionTypes/storeActionTypes";

const initialState = {
  stores: [],
  store: {},
};

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    // add new store
    case storeActionTypes.ADD_STORE:
      return {
        ...state,
        stores: [...state.stores, action.payload],
      };

    // get specific store
    case storeActionTypes.DISPLAY_STORE:
      return {
        ...state,
        store: action.payload,
      };

    // get all stores
    case storeActionTypes.DISPLAY_STORES:
      return {
        ...state,
        stores: action.payload,
      };

    // update specific store
    case storeActionTypes.UPDATE_STORE:
      return {
        ...state,
        stores: [
          ...state.stores,
          state.stores.filter((store) => store._id !== action.payload._id),
          action.payload,
        ],
      };

    // remove specific store
    case storeActionTypes.REMOVE_STORE:
      return {
        ...state,
        stores: state.stores.filter(
          (store) => store._id !== action.payload._id
        ),
      };

    default:
      return state;
  }
};

export default storeReducer;
