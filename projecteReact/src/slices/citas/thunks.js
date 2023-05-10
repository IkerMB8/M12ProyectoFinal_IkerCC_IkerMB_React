import { setFecha, setEmail, setTelefono, setIDCliente, setIDTrabajador, setIDServicio, setPage } from "./citaSlice";

export const addCita = (authToken) => {
    return async (dispatch, getState) => {
        var formData = new FormData();
        formData.append("Fecha", getState().cita.Fecha);
        formData.append("Email", getState().cita.Email);
        formData.append("Telefono", getState().cita.Telefono);
        formData.append("ID_Cliente", getState().cita.ID_Cliente);
        formData.append("ID_Trabajador", getState().cita.ID_Trabajador);
        formData.append("ID_Servicio", getState().cita.ID_Servicio);
        try{
            const data = await fetch("http://127.0.0.1:8000/api/reservas", {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + authToken
            },
            method: "POST",
            body: formData
    
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