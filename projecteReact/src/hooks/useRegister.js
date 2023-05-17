import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../userContext";

export default function doLogin() {
  let [error, setError] = useState("");
  let {authToken, setAuthToken, usuari, setUsuari, idUsuari, setIdUsuari} = useContext(UserContext);

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
      }else{ 
        setError(resposta.message);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
};

  return { doRegister, error, setError };
}