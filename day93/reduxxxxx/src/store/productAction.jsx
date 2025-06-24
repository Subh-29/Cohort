import axios from "../api/axiosconfig";
import { loadproduct } from './productSlice'
const productAction = () => async (dispatch,) => {
    try {
        const res = await axios.get("/products");
        // console.log(res);
        
        dispatch(loadproduct(res.data));
    } catch (error) {
        console.log(error);
        
    }
};
// export const allProducts = () => async (dispatch, ) => {
//     try {
//         const res = await axios.post("/users", user);
//         // console.log("Getstate: ", getState())
//         // dispatch(loaduser(res.data));
//         // loaduser(res.data);
        

        
//     } catch (error) {
//         console.log(error);
        
//     }
// };

export const deleteProd = (id) => async (dispatch, ) => {
    try {
        await axios.delete(`/products/${id}`);
        const res = await axios.get("/products");
        dispatch(loadproduct(res.data));
    } catch (error) {
        console.log(error);
        
    }
}

export const productCreate = (prod) => async (dispatch, ) => {
    try {
        await axios.post("/products", prod);
        // console.log("Getstate: ", getState())
        // dispatch(loaduser(res.data));
        // loaduser(res.data);
        const res = await axios.get("/products");
        dispatch(loadproduct(res.data))
        // console.log("weee ",res.data);

        
    } catch (error) {
        console.log(error);
        
    }
};

export default productAction;