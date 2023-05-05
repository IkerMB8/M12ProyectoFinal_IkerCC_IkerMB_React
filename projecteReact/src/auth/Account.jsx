import LoginRegister from './LoginRegister';
import { UserContext } from "../userContext";
import { useContext } from "react";

export default function Account() {

    let {authToken, setAuthToken, usuari, setUsuari, idUsuari, setIdUsuari} = useContext(UserContext);

    return (
        <>
            {authToken ? (
                <div>
                    <h1 style={{color:'black'}}>Estás viendo la información de tu cuenta</h1>
                </div>
            ) : (
                <LoginRegister/>
            )}
        </>
    );
}