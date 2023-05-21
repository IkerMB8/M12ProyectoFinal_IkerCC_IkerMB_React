import { setCliente,setCitas,setProductos,setError,setIsLoading, } from "./cuentaSlice";
const CONTENT_TYPE_JSON = "application/json";

export const getCliente = (authToken) => {
    return async (dispatch, getState) => {
        try {
            const data = await fetch("http://equip11.insjoaquimmir.cat/api/user/cliente", {
                    headers: {
                        "Accept": CONTENT_TYPE_JSON,
                        "Content-Type": CONTENT_TYPE_JSON,
                        "Authorization": 'Bearer '  + authToken,
                    },
                    method: "GET",
            })
            const resposta = await data.json();
            if (resposta.success) {
                dispatch(setCliente(resposta.data))
            } else {
                dispatch(setError(resposta.message))
            }
        } catch (error) {
            dispatch(setError(error.message || 'Error en la solicitud de la API'));
        } finally {
            dispatch(setIsLoading(false));
        }
    };
}