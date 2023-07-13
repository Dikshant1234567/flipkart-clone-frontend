import axios from "axios";
import {
  GET_PRODUCT_DETAILVIEW_FAIL,
  GET_PRODUCT_DETAILVIEW_REQUEST,
  GET_PRODUCT_DETAILVIEW_SUCCESS,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_SUCCESS,
} from "../constants/constants";

// const URL = "http://localhost:8000";

const URL = "https://flipkart-clone-backend-6riv.onrender.com";

export const getProduct = () => async (dispatch) => {
  try {
    let { data } = await axios.get(`${URL}/product`);
    dispatch({ type: GET_PRODUCT_SUCCESS, payload: data });
    return;
  } catch (err) {
    dispatch({ type: GET_PRODUCT_FAIL, payload: err.message });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCT_DETAILVIEW_REQUEST });
    let { data } = await axios.get(`${URL}/product/${id}`);
    dispatch({ type: GET_PRODUCT_DETAILVIEW_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_PRODUCT_DETAILVIEW_FAIL, payload: error.message });
  }
};
