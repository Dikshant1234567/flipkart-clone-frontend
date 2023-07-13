import {
  GET_PRODUCT_DETAILVIEW_FAIL,
  GET_PRODUCT_DETAILVIEW_REQUEST,
  GET_PRODUCT_DETAILVIEW_RESET,
  GET_PRODUCT_DETAILVIEW_SUCCESS,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_SUCCESS,
} from "../constants/constants";

export const getProductReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case GET_PRODUCT_SUCCESS:
      return { products: action.payload };

    case GET_PRODUCT_FAIL:
      return { error: action.payload };

    default:
      return state;
  }
};

export const getProductDetailReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case GET_PRODUCT_DETAILVIEW_REQUEST:
      return { loading: true };
    case GET_PRODUCT_DETAILVIEW_SUCCESS:
      return { loading: false, product: action.payload };
    case GET_PRODUCT_DETAILVIEW_FAIL:
      return { loading: false, error: action.payload };
    case GET_PRODUCT_DETAILVIEW_RESET:
      return { product: {} };

    default:
      return state;
  }
};
