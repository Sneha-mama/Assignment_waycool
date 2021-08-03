import Axios from "axios";

export const GET_All_PRODUCTS_REQUEST ='GET_ALL_PRODUCTS_REQUEST';
export const GET_ALL_PRODUCTS_SUCCESS = 'GET_ALL_PRODUCTS_SUCCESS';
export const GET_ALL_PRODUCTS_FAILURE = 'GET_ALL_PRODUCTS_FAILURE';

export const GET_PRODUCT_REQUEST ='GET_PRODUCT_REQUEST';
export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';
export const GET_PRODUCT_FAILURE = 'GET_ALL_PRODUCT_FAILURE';

export const CREATE_PRODUCT_REQUEST ='CREATE_PRODUCTS_REQUEST';
export const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCTS_SUCCESS';
export const CREATE_PRODUCT_FAILURE = 'CREATE_PRODUCTS_FAILURE';

export const UPDATE_PRODUCT_REQUEST ='UPDATE_PRODUCT_REQUEST';
export const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS';
export const UPDATE_PRODUCT_FAILURE = 'UPDATE_PRODUCT_FAILURE';

export const DELETE_PRODUCT_REQUEST ='DELETE_PRODUCT_REQUEST';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_FAILURE = 'DELETE_PRODUCT_FAILURE';

// get all products
let getAllProducts = () => {
    return async (dispatch) => {
        try {
              dispatch({type : GET_ALL_PRODUCTS_REQUEST});
              let response = Axios.get()
        }
        catch(error) {

        }
    }
};