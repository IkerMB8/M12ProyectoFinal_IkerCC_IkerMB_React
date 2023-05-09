import { setFecha, setEmail, setTelefono, setIDCliente, setIDTrabajador, setIDServicio, setPage } from "./citaSlice";

export const getCitas = (authToken) => {
    return async (dispatch, getState) => {
        let filter = getState().posts.filter;
        dispatch(startLoadingPosts());
        const headers = {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + authToken,
            },
            method: "GET", 
        };

       
        try{
            const data = await fetch(url, headers);
            const resposta = await data.json();
            if (resposta.success == true) {
                dispatch(setPosts(resposta.data));
                if (page > 0) {
                    dispatch(setPosts(resposta.data.collection));
                    dispatch(setPages(resposta.data.links));
                } else {
                    dispatch(setPosts(resposta.data));
                }
            } else {
                dispatch(setError(resposta.message));
            }
        } catch (e) {
            dispatch(setError(e));
        }
    };
}