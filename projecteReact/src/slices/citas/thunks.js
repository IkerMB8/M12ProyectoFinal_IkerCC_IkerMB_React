import { setFecha, setEmail, setTelefono, setIDCliente, setIDTrabajador, setIDServicio, setPage, setError, setSuccess, setServicios, setTrabajadores } from "./citaSlice";

export const crearCita = (authToken) => {
    return async (dispatch, getState) => {
        const cita = {
            Fecha: getState().citas.Fecha,
            Email: getState().citas.Email,
            Telefono: getState().citas.Telefono,
            ID_Cliente: 1,
            ID_Trabajador: getState().citas.ID_Trabajador,
            ID_Servicio: getState().citas.ID_Servicio
        };
        console.log(cita)
        try{
            const data = await fetch("http://127.0.0.1:8000/api/reservas", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(cita)
    
            })
            const resposta = await data.json();
            if (resposta.success == true) {
                console.log("Cita Creada Satisfactoriamente");
                dispatch(setSuccess("Cita Creada Satisfactoriamente"));
                dispatch(setSuccess(""));
            }else{
                dispatch(setError(resposta.message));
            }
        } catch (e) {
            dispatch(setError(e));
        }
    };
}

export const primPagCitas = (authToken,data) => {
    console.log(data)
    return async (dispatch, getState) => {
        dispatch(setEmail(data.email));
        dispatch(setTelefono(data.telefono));
        dispatch(setIDTrabajador(data.especialista));
        dispatch(setIDServicio(data.servicio));
        dispatch(setPage(1));
    };
}

export const reiniciarCitas = () => {
    return async (dispatch, getState) => {
        dispatch(setFecha(""));
        dispatch(setEmail(""));
        dispatch(setTelefono(""));
        dispatch(setIDTrabajador(""));
        dispatch(setIDCliente(""));
        dispatch(setIDServicio(""));
        dispatch(setPage(0));
    };
}


export const getServicios = () => {
    return async (dispatch, getState) => {
        try{
            const data = await fetch("http://127.0.0.1:8000/api/servicios", {
                headers: {
                    'Accept': 'application/json'
                },
                method: "GET"
            })
            const resposta = await data.json();
            if (resposta.success == true) {
                dispatch(setServicios(resposta.data));
            }else{
                dispatch(setError(resposta.message));
            }
        } catch (e) {
            dispatch(setError(e));
        }
    };
}

export const getTrabajadores = () => {
    return async (dispatch, getState) => {
        try{
            const data = await fetch("http://127.0.0.1:8000/api/trabajadores", {
                headers: {
                    'Accept': 'application/json'
                },
                method: "GET"
            })
            const resposta = await data.json();
            if (resposta.success == true) {
                dispatch(setTrabajadores(resposta.data));
            }else{
                dispatch(setError(resposta.message));
            }
        } catch (e) {
            dispatch(setError(e));
        }
    };
}
