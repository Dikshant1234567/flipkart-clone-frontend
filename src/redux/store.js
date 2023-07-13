import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import {
  getProductDetailReducer,
  getProductReducer,
} from "./reducer/productReducer";
import {cartReducer} from "./reducer/cartReducer";

const middleware = [thunk];

const store = configureStore({
  reducer: {
    getProduct: getProductReducer,
    getProductDetail: getProductDetailReducer,
    cart: cartReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware(...middleware),
});

export default store;
