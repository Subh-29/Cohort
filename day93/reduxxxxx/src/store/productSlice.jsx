import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    data: []
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        loadproduct: (state, action) => {
            state.data = action.payload;
        }
    }
});


export const {loadproduct} = productSlice.actions;

export default productSlice.reducer;