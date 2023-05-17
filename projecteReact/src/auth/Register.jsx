import React from "react";
import { useState, useContext } from 'react';
import './loginregister.css';
import useRegister from "../hooks/useRegister";

import { useForm } from "react-hook-form";

export default function Register({ setCanvi }) {
    const { doRegister } = useRegister();  
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => doRegister(data);
    
    return (
        <> 
        <div className="bg-imagen">
            <div className="formlogreg">
                <div>
                        <img className="imagenLogo" src="/chr.png"/>
                </div>
                <div>
                    <h1 className="text-center">Register</h1>
                    <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
                        <label className="col-one-half">
                            <span className="label-text">Nombre</span>
                            <input type="text" name="name" {...register("name")}/>
                        </label>
                        <label className="col-one-half">
                            <span className="label-text">Apellido</span>
                            <input type="text" name="secondname" {...register("secondname")}/>
                        </label>
                        <label>
                            <span className="label-text">Email</span>
                            <input type="text" name="email" {...register("email")}/>
                        </label>
                        <label>
                            <span className="label-text">Telefono</span>
                            <input type="tel" name="telephone" {...register("telephone")}/>
                        </label>
                        <label className="password">
                            <span className="label-text">Password</span>
                            <input type="password" name="password" {...register("password")}/>
                        </label>
                        <label>
                            <span className="label-text">Año nacimiento</span>
                            <input type="text" name="birthyear" {...register("birthyear")}/>
                        </label>
                        <div className="text-center">
                            <button className="submit" name="register">Registrame</button>
                        </div>
                        <div className="preglogreg">
                            <p>¿Ya tienes cuenta? <a href="#" onClick={() => {setCanvi(true);}} > Inicia Sesión</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}