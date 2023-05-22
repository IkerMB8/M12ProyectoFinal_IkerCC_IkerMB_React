import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    Fecha: "",
    Email: "",
    Telefono: "",
    ID_Cliente: 0,
    ID_Trabajador: 0,
    ID_Servicio: 0,
    page: 0,
    Error: "",
    Servicios: [],
    Trabajadores: [],
    IsLoading: true,
    horasOcupadas: []
}

export const citaSlice = createSlice({
    name: "cita",
    initialState,
    reducers: {
        setFecha: (state,action) => { 
            state.Fecha = action.payload;
        },
        setEmail: (state,action) => { 
            state.Email = action.payload;
        },
        setTelefono: (state,action) => { 
            state.Telefono = action.payload;
        },
        setIDCliente: (state,action) => {
            state.ID_Cliente = action.payload;
        },
        setIDTrabajador: (state,action) => {
            state.ID_Trabajador = action.payload;
        },
        setIDServicio: (state,action) => { 
            state.ID_Servicio = action.payload;
        },
        setPage: (state,action) => {
            state.page = action.payload;
        },
        setError: (state,action) => {
            state.Error = action.payload;
        },
        setServicios: (state,action) => {
            state.Servicios = action.payload;
        },
        setTrabajadores: (state,action) => {
            state.Trabajadores = action.payload;
        },
        setIsLoading: (state,action) => {
            state.IsLoading = action.payload;
        },
        setHorasOcupadas: (state,action) => {
            state.horasOcupadas = action.payload;
        }
    }
});

export const { setFecha, setEmail, setTelefono, setIDCliente, setIDTrabajador, setIDServicio, setPage, setError, setSuccess, setServicios, setTrabajadores, setIsLoading, setHorasOcupadas } = citaSlice.actions;

export default citaSlice.reducer