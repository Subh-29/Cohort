import axios from "../api/axiosconfig";
import { loadcomment } from "./commentSlice";

const commentAction = () => async (dispatch,) => {
    try {
        const res = await axios.get("/comments");
        dispatch(loadcomment(res.data))
    } catch (error) {
        console.log(error);
        
    }
};

export default commentAction;