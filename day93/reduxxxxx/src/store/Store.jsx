import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import productSlice from './productSlice'
import commentSlice from './commentSlice'

export const store = configureStore({
    reducer: {
        user: userSlice,
        product: productSlice,
        comment: commentSlice,
    },
});