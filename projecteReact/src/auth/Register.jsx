import React from "react";
import { useState, useContext } from 'react';
import './loginregister.css';
import useRegister from "../hooks/useRegister";

import { useForm } from "react-hook-form";

export default function Register({ setCanvi }) {
  const { doRegister } = useRegister();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => doRegister(data);

  return (
    <>
      <div className="bg-imagen">
        <div className="formlogreg">
          <div>
            <img className="imagenLogo" src="/chr.png" />
          </div>
          <div>
            <h1 className="text-center">Register</h1>
            <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
              <label className="col-one-half">
                <span className="label-text">Nombre</span>
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: "Este campo es obligatorio" })}
                />
                {errors.name && <span className="error" style={{height:"auto"}}>{errors.name.message}</span>}
              </label>
              <label className="col-one-half">
                <span className="label-text">Apellido</span>
                <input
                  type="text"
                  name="secondname"
                  {...register("secondname", { required: "Este campo es obligatorio" })}
                />
                {errors.secondname && <span className="error" style={{height:"auto"}}>{errors.secondname.message}</span>}
              </label>
              <label>
                <span className="label-text">Email</span>
                <input
                  type="text"
                  name="email"
                  {...register("email", {
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
                }})}
                />
                {errors.email && <span className="error">{errors.email.message}</span>}
              </label>
              <label>
                <span className="label-text">Telefono</span>
                <input
                  type="tel"
                  name="telephone"
                  {...register("telephone", {
                    required: "Este campo es obligatorio",
                    pattern: {
                      value: /^\d+$/,
                      message: "Número de teléfono inválido"
                    }
                  })}
                />
                {errors.telephone && <span className="error">{errors.telephone.message}</span>}
              </label>
              <label className="password">
                <span className="label-text">Password</span>
                <input
                  type="password"
                  name="password"
                  {...register("password", {
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
                    }})}
                />
                {errors.password && <span className="error">{errors.password.message}</span>}
              </label>
              <label>
                <span className="label-text">Año nacimiento</span>
                <input
                  type="text"
                  name="birthyear"
                  {...register("birthyear", {
                    required: "Este campo es obligatorio",
                    pattern: {
                      value: /^\d{4}$/,
                      message: "Año inválido"
                    }
                  })}
                />
                {errors.birthyear && <span className="error">{errors.birthyear.message}</span>}
              </label>
              <div className="text-center">
                <button className="submit" name="register">
                  Registrame
                </button>
              </div>
              <div className="preglogreg">
                <p>
                  ¿Ya tienes cuenta?{" "}
                  <a href="#" onClick={() => { setCanvi(true); }}>
                    Inicia Sesión
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
