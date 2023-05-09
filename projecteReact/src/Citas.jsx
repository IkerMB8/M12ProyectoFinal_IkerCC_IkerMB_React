import  React  from 'react';
import './citas.css';
import { useForm } from "react-hook-form";

export default function Citas() { 
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => cita(data);

    function cita(data){
        console.log(data)
    }
    
  return (
    <>
        <div className="citas">
            <h1>Pedir cita</h1>
            <form  onSubmit={handleSubmit(onSubmit)}>           
                <div className="form-group">
                    <label htmlFor="emailUsuario" className="form-label">Introdueix el teu email</label>
                    <input type="email" className="form-control" required="" placeholder="Email" {...register("email", {
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
                    <label htmlFor="selectServicio" className="form-label">Selecciona el servicio</label>
                    <select id="selectServicio" name="selectServicio" className="form-control" {...register("servicio", {required: "Este campo és obligatorio"})}>
                        <option value="">Selecciona el servicio</option>
                        <option value="1">CORTE DE PELO</option>
                        <option value="2">TINTE DE PELO</option>
                        <option value="3">PERMANENTE</option>
                    </select>
                    {errors.servicio ? <div className="error">{errors.servicio.message}</div> : <></>}
                </div>
                <div className="form-group">
                    <label htmlFor="selectEspecialista" className="form-label mt-2">Selecciona l'especialista</label>
                    <select id="selectEspecialista" name="selectEspecialista" className="form-control" {...register("especialista", {required: "Este campo és obligatorio"})}>
                        <option value="">Selecciona l'especialista</option>
                        <option value="1">Christian Rios</option>
                        <option value="2">Claudio Guirao</option>
                        <option value="3">Jana</option>
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