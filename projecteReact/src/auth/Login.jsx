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
                {/* <img className="imgFondo" src="/salon.jpg"></img> */}
                <div className="boxLogin">
                    <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', padding: '10px 10px 10px 0px'}}>
                        <div className="grad">
                            <img className='imagenLogo' src='/chr.png'></img>
                        </div>
                        <form className="login" onSubmit={handleSubmit(onSubmit)}>
                            
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
                            {errors.email ? <div className="error">{errors.email.message}</div> : <></>}
                            <br/>
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
                            {errors.password ? <div className="error">{errors.password.message}</div> : <></>}
                            <br/>
                            <input type="submit" value="Login"/>
                            
                        </form>
                    </div>
                    <div>
                        <p>¿No tienes cuenta? <a href="#" onClick={() => {setCanvi(false);}} > Regístrate</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}
