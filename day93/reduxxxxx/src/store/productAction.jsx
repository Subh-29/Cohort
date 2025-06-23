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

export default productAction;