import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    data: [],
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loaduser: (state, action) => {
            // console.log("state: ", state);
            // console.log("Action: ", action);
            state.data = action.payload;
            // console.log(state);
            
        },
    },
});


export const { loaduser } = userSlice.actions;
export default userSlice.reducer;
