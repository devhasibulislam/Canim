import blogActionTypes from "../actionTypes/blogActionTypes";

const initialState = {
  blogs: [],
  blog: {},
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    // add new blog
    case blogActionTypes.ADD_BLOG:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };

    // get specific blog
    case blogActionTypes.DISPLAY_BLOG:
      return {
        ...state,
        blog: action.payload,
      };

    // get all blogs
    case blogActionTypes.DISPLAY_BLOGS:
      return {
        ...state,
        blogs: action.payload,
      };

    // update specific blog
    case blogActionTypes.UPDATE_BLOG:
      return {
        ...state,
        blogs: [
          ...state.blogs,
          state.blogs.filter((blog) => blog._id !== action.payload._id),
          action.payload,
        ],
      };

    // remove specific blog
    case blogActionTypes.REMOVE_BLOG:
      return {
        ...state,
        blogs: state.blogs.filter((blog) => blog._id !== action.payload._id),
      };

    default:
      return state;
  }
};

export default blogReducer;
