import  React  from 'react';
import './citas.css';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { primPagCitas } from "./slices/citas/thunks";
import { UserContext } from "./userContext";
import { useContext } from "react";
import { useSelector } from "react-redux";

export default function Cita() { 
    const { Servicios, Trabajadores } = useSelector((state) => state.citas);
    let { authToken, setAuthToken, usuari, setUsuari } = useContext(UserContext);
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => dispatch(primPagCitas(authToken,data));
    
  return (
    <>
        <div className="citas">
            <h1>Pedir cita</h1>
            <form  onSubmit={handleSubmit(onSubmit)}>           
                <div className="form-group">
                    <label htmlFor="emailUsuario" className="form-label">Introduce tu email</label>
                    <input id="emailUsuario" type="email" className="form-control" required="" placeholder="Email" {...register("email", {
                                required: "Este campo és obligatorio",
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
                </div>      
                <div className="form-group">
                    <label htmlFor="telefonoUsuario" className="form-label">Introduce tu telefono</label>
                    <input id="telefonoUsuario" type="number" className="form-control" required="" placeholder="Telefono" {...register("telefono", {
                                required: "Este campo és obligatorio",
                                minLength: {
                                    value: 9,
                                    message: "El telefono tiene que contener 9 numeros"
                                },
                                maxLength: {
                                    value: 9,
                                    message: "El telefono tiene que contener 9 numeros"
                                },
                                pattern: {
                                    value: /^[0-9]+$/,
                                    message: "Inserte un numero válido" 
                            }})}/>
                    {errors.telefono ? <div className="error">{errors.telefono.message}</div> : <></>}
                </div>
                <div className="form-group">
                    <label htmlFor="selectServicio" className="form-label">Selecciona el servicio</label>
                    <select id="selectServicio" name="selectServicio" className="form-control" {...register("servicio", {required: "Este campo és obligatorio"})}>
                        <option value="">Selecciona el servicio</option>
                        {Servicios.map((servicio) => (
                            <option key={servicio.id} value={servicio.id}>{servicio.Nombre}</option>
                        ))}
                    </select>
                    {errors.servicio ? <div className="error">{errors.servicio.message}</div> : <></>}
                </div>
                <div className="form-group">
                    <label htmlFor="selectEspecialista" className="form-label mt-2">Selecciona l'especialista</label>
                    <select id="selectEspecialista" name="selectEspecialista" className="form-control" {...register("especialista", {required: "Este campo és obligatorio"})}>
                        <option value="">Selecciona l'especialista</option>
                        {Trabajadores.map((especialista) => (
                            <option key={especialista.id} value={especialista.id}>{especialista.Nombre}</option>
                        ))}
                    </select>
                    {errors.especialista ? <div className="error">{errors.especialista.message}</div> : <></>}
                </div>

                <div className="text-center pt-4">
                    <button type='submit' className="btn btnBooking btn-large">Veure horaris</button>
                </div>
            </form>
        </div>
    </>
  );
}