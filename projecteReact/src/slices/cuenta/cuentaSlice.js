import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    Cliente: {
        Nombre: "",
        Apellido: "",
        Telefono: "",
        AnioNacimiento: 0,
    },
    Citas: [],
    Productos: [],
    Error: "",
    IsLoading: true
};

export const cuentaSlice = createSlice({
  name: "cuenta",
  initialState,
  reducers: {
    setCliente: (state, action) => {
      state.Cliente = action.payload;
    },
    setCitas: (state, action) => {
      state.Citas = action.payload;
    },
    setProductos: (state, action) => {
      state.Productos = action.payload;
    },
    setError: (state, action) => {
      state.Error = action.payload;
    },
    setIsLoading: (state, action) => {
      state.IsLoading = action.payload;
    },
  },
});

export const {
  setCliente,setCitas,setProductos,setError,setIsLoading,
} = cuentaSlice.actions;

export default cuentaSlice.reducer;
