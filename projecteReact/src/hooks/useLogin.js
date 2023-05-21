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

  const logout = async (e) => {
    e.preventDefault();
  
    // Enviam dades a l'aPI i recollim resultat
    try {
      const data = await fetch("http://equip11.insjoaquimmir.cat/api/logout", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Authorization": 'Bearer '  + authToken,
      
        },
        method: "POST",
      })

      const resposta = await data.json();
      if (resposta.success === true){
        setAuthToken('');
        sessionStorage.removeItem('token');
      } 
    } catch {
      console.log("Error");
    }
  };

  return { doLogin, error, setError, checkAuthToken, logout };
}