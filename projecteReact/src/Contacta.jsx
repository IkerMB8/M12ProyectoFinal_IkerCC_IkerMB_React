import './contacta.css';
import React from 'react';
import { useForm } from 'react-hook-form';

export default function Contacta() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (formData) => {
    try {
      const response = await fetch('http://equip11.insjoaquimmir.cat/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Mensaje enviado correctamente');
        reset();
      } else {
        throw new Error('Error al enviar el mensaje');
      }
    } catch (error) {
      console.error(error);
      alert('Error al enviar el mensaje');
    }
  };

  return (
    <>
      <div className='positioning'>
        <h1 className='titContacta' id="Contacta">CONTACTA CON NOSOTROS</h1>
        <section className="form_wrap">
          <section className="cantact_info">
            <section className="info_title">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.8254124243344!2d1.7176336767890341!3d41.22557497132093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a386fd0cf9c929%3A0xc95528801531d62c!2sChristian%20Rios%20Hairdressing%20%26%20Barber!5e0!3m2!1sca!2ses!4v1683127870362!5m2!1sca!2ses" height="100%" frameBorder="0" width="400" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </section>
            <section className="info_items">
              <div className='infoContacta'>
                <p><i className="bi bi-house-door-fill"></i> Carrer dels Picapedrers, 27,<br/> Vilanova i la Geltrú</p>
                <p><i className="bi bi-telephone-fill"></i> 937 68 28 69</p>
              </div>
              <hr className='hrMapa'></hr>
              <div>
                <h2 className='h2Mapa'>HORARIOS</h2>
                <p>DE MARTES A VIERNES: 9.30H - 13.30H / 15H - 20H
                  SÁBADO: 9H - 14.30H
                  DOMINGO Y LUNES: CERRADO</p>
              </div>
            </section>
          </section>
          <form className="form_contact" onSubmit={handleSubmit(onSubmit)}>
            <h2>Envia un mensaje</h2>
            <div className="user_info">
              <label htmlFor="name">Nombre <span style={{color:"red"}}>*</span></label>
              <input type="text" id="name" {...register('name', { required: "Este campo es obligatorio" })} />
              {errors.name && <span className="error">{errors.name.message}</span>}

              <label htmlFor="phone">Teléfono</label>
              <input type="text" id="phone" {...register('phone')} />
              {errors.phone && <span className="error">{errors.phone.message}</span>}

              <label htmlFor="email">Correo eléctronico <span style={{color:"red"}}>*</span></label>
              <input type="text" id="email" 
                  {...register("email", {
                    required: "Este campo es obligatorio",
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
                        message: "Email no válido" 
                }})} />
              {errors.email && <span className="error">{errors.email.message}</span>}

              <label htmlFor="mensaje">Mensaje <span style={{color:"red"}}>*</span></label>
              <textarea className='textoMsj' id="mensaje" {...register('mensaje', { required: "Este campo es obligatorio" })}></textarea>
              {errors.mensaje && <span className="error">{errors.mensaje.message}</span>}

              <input className="botonContacto" type="submit" value="Enviar Mensaje" id="btnSend" />
            </div>
          </form>
        </section>
      </div>
    </>
  );
}