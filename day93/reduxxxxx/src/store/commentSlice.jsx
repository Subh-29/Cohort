import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    data: [],
}
const commentSlice = createSlice({
    name: "comment",
    initialState,
    reducers: {
        loadcomment: (state, action) => {
            state.data = action.payload;
        }
    }
});

export const {loadcomment} = commentSlice.actions;
export default commentSlice.reducer;