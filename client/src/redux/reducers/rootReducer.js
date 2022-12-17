import { combineReducers } from "redux";
import bannerReducer from "./bannerReducer";
import blogReducer from "./blogReducer";
import brandReducer from "./brandReducer";
import categoryReducer from "./categoryReducer";
import paymentReducer from "./paymentReducer";
import productReducer from "./productReducer";
import reviewReducer from "./reviewReducer";
import storeReducer from "./storeReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  banner: bannerReducer,
  blog: blogReducer,
  brand: brandReducer,
  category: categoryReducer,
  store: storeReducer,
  product: productReducer,
  review: reviewReducer,
  user: userReducer,
  payment: paymentReducer,
});

export default rootReducer;
