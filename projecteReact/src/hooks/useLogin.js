import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../userContext";

export default function doLogin() {
    let [error, setError] = useState("");
    let {authToken, setAuthToken, usuari, setUsuari, idUsuari, setIdUsuari, idCliente, setIdCliente} = useContext(UserContext);

    const checkAuthToken = async () => {
        if (sessionStorage.getItem('token')){
            try {
                const data = await fetch("http://equip11.insjoaquimmir.cat/api/user", {
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": 'Bearer '  + sessionStorage.getItem('token'),
                    },
                    method: "GET",
                })
                const resposta = await data.json();
                if (resposta.success === true) {
                    setAuthToken(sessionStorage.getItem('token'));
                    setUsuari(resposta.user.email);
                    setIdUsuari(resposta.user.id);
                    console.log(resposta.user.ID_Cliente)
                    setIdCliente(resposta.user.ID_Cliente);
                }else{
                    console.log("La resposta no ha triomfat");
                }            
            } catch {
                console.log("Error");
            }
        };
    }
    useEffect(()=>{
        checkAuthToken()
    }, []);

    
  const doLogin = async (data) => {
    let email = data.email;
    let password = data.password;
    try {
      const data = await fetch("http://equip11.insjoaquimmir.cat/api/login", {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({ email, password })
      });
      const resposta = await data.json();
      if (resposta.success === true){
        setAuthToken(resposta.authToken);
        setUsuari(email);
        if (! sessionStorage.getItem('token')){
          sessionStorage.setItem('token', resposta.authToken);
        }
        checkAuthToken();
      }else{ 
        setError(resposta.message);
      }
    } catch {
      console.log("Error");
    }
  };

  return { doLogin, error, setError, checkAuthToken };
}