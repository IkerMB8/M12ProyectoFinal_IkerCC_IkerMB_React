import { configureStore } from '@reduxjs/toolkit'
import citasReducer from '../slices/citas/citaSlice'
import cuentaReducer from '../slices/cuenta/cuentaSlice'
export const store = configureStore({
    reducer: {
        citas: citasReducer,
        cuenta: cuentaReducer,
    },
})