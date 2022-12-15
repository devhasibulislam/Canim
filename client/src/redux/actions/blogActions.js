import blogActionTypes from "../actionTypes/blogActionTypes";

export const addBlogData = (data) => {
  return {
    type: blogActionTypes.ADD_BLOG,
    payload: data,
  };
};

export const displayBlogData = (data) => {
  return {
    type: blogActionTypes.DISPLAY_BLOG,
    payload: data,
  };
};

export const displayAllBlogsData = (data) => {
  return {
    type: blogActionTypes.DISPLAY_BLOGS,
    payload: data
  };
};

export const updateBlogData = (data) => {
  return {
    type: blogActionTypes.UPDATE_BLOG,
    payload: data,
  };
};

export const removeBlogData = (_id) => {
  return {
    type: blogActionTypes.REMOVE_BLOG,
    payload: {
      _id: _id,
    },
  };
};
