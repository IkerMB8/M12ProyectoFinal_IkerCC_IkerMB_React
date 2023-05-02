import React from "react";
import { useState, useContext } from 'react';

export default function Register({ setCanvi }) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let [error, setError2] = useState("");

    return (
        <> 
            <div class="body">
                <div class="grad">
                    <div class="header">
                        <div>Site<span>Random</span></div>
                    </div>
                    <br/>
                    <div class="login">
                        <form onSubmit={handleSubmit(onSubmit)} className="form login">
                            <div className="form__field">
                                <label htmlFor="login__username"><svg className="icon">
                                    <use xlinkHref="#icon-user"></use>
                                </svg><span className="hidden">Username</span></label>
                                <input {...register("name", {
                                    required: "Aquest camp és obligatori",
                                    minLength: {
                                        value: 6,
                                        message: "El nom d'usuari ha de tenir al menys 6 caràcters"
                                    },
                                    maxLength: {
                                        value: 30,
                                        message: "El nom d'usuari ha de tenir com a màxim 30 caràcters"
                                    },
                                    pattern: {
                                        value: /^[a-zA-ZáéíóúÁÉÍÓÚ]+\s[a-zA-ZáéíóúÁÉÍÓÚ]+$/,
                                        message: "El nombre de usuario tiene que contener dos palabras separadas por un espacio, sin simbolos" 
                                    }})} className="form__input" id="username" type="text" placeholder="Username"/>              
                            </div>
                            {errors.name ? <div className="error">{errors.name.message}</div> : <></>}

                            <div className="form__field">
                                <label htmlFor="login__username"><svg className="icon">
                                    <use xlinkHref="#icon-user"></use>
                                </svg><span className="hidden">Username</span></label>
                                <input {...register("email", {
                                    required: "Aquest camp és obligatori",
                                    minLength: {
                                        value: 6,
                                        message: "El email ha de tenir al menys 6 caràcters"
                                    },
                                    maxLength: {
                                        value: 40,
                                        message: "El email ha de tenir com a màxim 40 caràcters"
                                    },
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@fp\.insjoaquimmir\.cat$/,
                                        message: "El email tiene que ser del dominio @fp.insjoaquimmir.cat" 
                                    }})} className="form__input" id="email" type="mail" placeholder="Email"/>      
                            </div>
                            {errors.email ? <div className="error">{errors.email.message}</div> : <></>}
                            <div className="form__field">
                                <label htmlFor="login__password"><svg className="icon">
                                    <use xlinkHref="#icon-lock"></use>
                                </svg><span className="hidden">Password</span></label>
                                {/* <input className="form__input" name="password" id="password" type="password" placeholder="******************" onChange={(e) => {onInputChange(e); }}/>   */}
                                <input {...register("password", {
                                    required: "Aquest camp és obligatori",
                                    minLength: {
                                        value: 8,
                                        message: "La contrasenya ha de tenir al menys 8 caràcters"
                                    },
                                    maxLength: {
                                        value: 20,
                                        message: "La contrasenya ha de tenir com a màxim 20 caràcters"
                                    },
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                                        message: "La contrasenya ha de contenir al menys una minúscula, una majúscula, i un número" 
                                    }})} className="form__input" id="password" type="password" placeholder="Contraseña"/>  
                            </div>
                            {errors.password ? <div className="error">{errors.password.message}</div> : <></>}
                            <div className="form__field">
                                <label htmlFor="login__password"><svg className="icon">
                                    <use xlinkHref="#icon-lock"></use>
                                </svg><span className="hidden">Password</span></label>
                                <input {...register("password2")} className="form__input" id="confirm-password" type="password" placeholder="Confirmar contraseña"/>  
                            </div>

                            {error ? <div className="error">{error}</div> : <></>}
                            <div className="form__field">
                                <input className="submit" type="submit" value="Regístrate"></input>
                            </div>

                        </form>
                        <p className="text--center">¿Ya tienes cuenta? <a href="#" onClick={() => {setCanvi(true);}} > Inicia Sesión</a>
                            <svg className="icon">
                                <use xlinkHref="#icon-arrow-right"></use>
                            </svg>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
