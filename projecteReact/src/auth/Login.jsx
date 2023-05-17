import React from "react";
import './loginregister.css';
import { useForm } from "react-hook-form";
import useLogin from "../hooks/useLogin";

export default function Login({setCanvi}) {
    const { doLogin, error, setError } = useLogin();  
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => doLogin(data);

    return (
        <> 
            <div className="bg-imagen">
            <div className="formlogreg">
                <div>
                        <img className="imagenLogo" src="/chr.png"/>
                </div>
                <div>
                    <h1 className="text-center">Login</h1>
                    <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
                        <label>
                            <span className="label-text">Email</span>
                            <input type="text" placeholder="Email" {...register("email", {
                                required: "Aquest camp és obligatori",
                                minLength: {
                                    value: 6,
                                    message: "El email tiene que tener mínimo 6 caracteres"
                                },
                                maxLength: {
                                    value: 40,
                                    message: "El email no puede contener mas de 40 caracteres"
                                },
                                pattern: {
                                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                    message: "Inserte un email válido" 
                            }})}/>
                        </label>
                        <label className="password">
                            <span className="label-text">Password</span>
                            <input type="password" placeholder="Password" {...register("password", {
                                required: "Aquest camp és obligatori",
                                minLength: {
                                    value: 8,
                                    message: "La contraseña tiene que contener mínimo 8 caracteres"
                                },
                                maxLength: {
                                    value: 20,
                                    message: "La contraseña no puede contener más de 20 caracteres"
                                },
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                                    message: "La contraseña tiene que contener al menos una minúscula, una mayuscula, i un número" 
                            }})}/>
                        </label>
                        <div className="text-center">
                            <button className="submit" name="register">Iniciar Sesión</button>
                        </div>
                        <div className="preglogreg">
                            <p>¿No tienes cuenta? <a href="#" onClick={() => {setCanvi(false);}} > Regístrate</a></p>
                        </div>
                    </form>
                </div>
            </div>
                
            </div>
        </>
    )
}
