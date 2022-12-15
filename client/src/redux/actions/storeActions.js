import storeActionTypes from "../actionTypes/storeActionTypes";

export const addStoreData = (data) => {
  return {
    type: storeActionTypes.ADD_STORE,
    payload: data,
  };
};

export const displayStoreData = (data) => {
  return {
    type: storeActionTypes.DISPLAY_STORE,
    payload: data,
  };
};

export const displayAllStoresData = (data) => {
  return {
    type: storeActionTypes.DISPLAY_STORES,
    payload: data,
  };
};

export const updateStoreData = (data) => {
  return {
    type: storeActionTypes.UPDATE_STORE,
    payload: data,
  };
};

export const removeStoreData = (_id) => {
  return {
    type: storeActionTypes.REMOVE_STORE,
    payload: {
      _id: _id,
    },
  };
};
