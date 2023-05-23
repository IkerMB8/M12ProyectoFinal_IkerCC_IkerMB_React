import { setFecha, setEmail, setTelefono, setIDCliente, setIDTrabajador, setIDServicio, setPage, setError, setServicios, setTrabajadores, setHorasOcupadas } from "./citaSlice";
import Swal from 'sweetalert';
const CONTENT_TYPE_JSON = "application/json";

export const crearCita = (id, navigate) => {
    return async (dispatch, getState) => {
        const { Fecha, Email, Telefono, ID_Trabajador, ID_Servicio } = getState().citas;
        let cita = {
            Fecha,
            Email,
            Telefono,
            ID_Trabajador,
            ID_Servicio
        };
        if (id){
            cita = {
                ...cita,
                ID_Cliente: id
            };
        }
        try{
            const data = await fetch("http://equip11.insjoaquimmir.cat/api/reservas", {
            headers: {
                Accept: CONTENT_TYPE_JSON,
                "Content-Type": CONTENT_TYPE_JSON,
            },
            method: "POST",
            body: JSON.stringify(cita)
    
            })
            const resposta = await data.json();
            if (resposta.success == true) {
                console.log("Cita Creada Satisfactoriamente");
                Swal("Success","La cita se ha creado correctamente", "success");
                dispatch(reiniciarCitas());
                navigate("/");
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
        dispatch(setIDCliente(null));
        dispatch(setIDTrabajador(null));
        dispatch(setIDServicio(null));
        dispatch(setError(null));
        dispatch(setPage(0));
    };
}


export const getServicios = () => {
    return async (dispatch, getState) => {
        try{
            const data = await fetch("http://equip11.insjoaquimmir.cat/api/servicios", {
                headers: {
                    'Accept': CONTENT_TYPE_JSON
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
            const data = await fetch("http://equip11.insjoaquimmir.cat/api/trabajadores", {
                headers: {
                    'Accept': CONTENT_TYPE_JSON
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

export const getCitas = () => {
    return async (dispatch, getState) => {
        try {
            const data = await fetch("http://equip11.insjoaquimmir.cat/api/dia/reservas", {
                headers: {
                    'Accept': CONTENT_TYPE_JSON
                },
                method: "GET"
            });
            const resposta = await data.json();
            console.log(resposta);
            if (resposta.success === true) {
                const fechasReservas = resposta.data
                .filter((reserva) => reserva.ID_Trabajador == getState().citas.ID_Trabajador)
                .map((reserva) => reserva.Fecha);
                dispatch(setHorasOcupadas(fechasReservas));
            } else {
                console.log(resposta.message);
            }
        } catch (e) {
            console.log(e);
        }
    };
}