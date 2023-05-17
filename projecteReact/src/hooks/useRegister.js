import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../userContext";

export default function doLogin() {
  let [error, setError] = useState("");
  let {authToken, setAuthToken, usuari, setUsuari, idUsuari, setIdUsuari, idCliente, setIdCliente} = useContext(UserContext);

  const doRegister = async (data) => {
    const { email, password, name, secondname, telephone, birthyear } = data;
    console.log(data)
    try {
      const data = await fetch("http://127.0.0.1:8000/api/register", {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({ email, password, name, secondname, telephone, birthyear })
      });
      const resposta = await data.json();
      if (resposta.success === true){
        setAuthToken(resposta.authToken);
        setUsuari(email);
        sessionStorage.setItem('token', resposta.authToken);
        checkAuthToken();
      }else{ 
        setError(resposta.message);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  const checkAuthToken = async () => {
    if (sessionStorage.getItem('token')){
      try {
          const data = await fetch("http://127.0.0.1:8000/api/user", {
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
              setIdCliente(resposta.user.id_cliente);
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

  return { doRegister, error, setError };
}