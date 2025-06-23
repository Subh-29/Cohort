import axios from '../api/axiosconfig'
import { loaduser } from './userSlice';


export const  userLogin  = (user) => async (dispatch,) => {
    try {
        const res = await axios.get(`/users?email=${user.email}&password=${user.password}`);
        console.log("checkkkk: ",res.data[0]);
        const foundUser = res.data[0];
        if (foundUser) {
            localStorage.setItem("user", JSON.stringify(res.data[0]));
            
        }
        else {
            console.warn("Credentials are not valid");
            
        }
        
    } catch (error) {
        console.log(error);
        
    }
}


export const allUserDetails = () => async (dispatch) => {
    try {
        const res = await axios.get(`/users`);
        dispatch(loaduser(res.data));
    } catch (error) {
        console.log(error);
        
    }
}

const userAction = (user) => async (dispatch, ) => {
    try {
        const res = await axios.post("/users", user);
        // console.log("Getstate: ", getState())
        // dispatch(loaduser(res.data));
        // loaduser(res.data);
        console.log("weee ",res.data);

        
    } catch (error) {
        console.log(error);
        
    }
};

export default userAction;