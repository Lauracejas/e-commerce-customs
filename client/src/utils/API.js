import axios from "axios";
// const { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } = require("./actions");
// const { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL } = require("./actions");

// const listProduct = () => async (dispatch) => {
//     try {
//         dispatch({type: PRODUCT_LIST_REQUEST});
//         const {data} = await axios.get("/api/products");
//         dispatch({type: PRODUCT_LIST_SUCCESS, payload: data})        
//     } catch (error) {
//         dispatch({type: PRODUCT_LIST_FAIL, payload: error.mesaage})
//     }
// }
const getProduct = (id) => {
    return axios.get(`/api/products/${id}`)
}
const getAllProducts = () => {
    return axios.get(`/api/products/`)
}
const getUsers = () => {
    return axios.get(`/api/users/signin`)
}
export {getAllProducts, getProduct, getUsers}

