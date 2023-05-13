import { configureStore } from '@reduxjs/toolkit'
import citasReducer from '../slices/citas/citaSlice'
export const store = configureStore({
    reducer: {
        citas: citasReducer,
    },
})