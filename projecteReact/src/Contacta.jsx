import './contacta.css';
import React, { useState } from 'react';

export default function Contacta() {
  const [formData, setFormData] = useState({
    names: '',
    phone: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://equip11.insjoaquimmir.cat/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Mostrar mensaje de éxito al usuario
        alert('Mensaje enviado correctamente');

        // Reiniciar los valores del formulario
        setFormData({
          names: '',
          phone: '',
          email: '',
          mensaje: ''
        });
      } else {
        // Manejar el caso en que la respuesta no sea exitosa
        throw new Error('Error al enviar el mensaje');
      }
    } catch (error) {
      // Manejar cualquier error que ocurra durante el envío del formulario
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
                <p><i className="bi bi-house-door-fill"></i> Carrer dels Picapedrers, 27, Vilanova i la Geltrú</p>
                <p><i className="bi bi-telephone-fill"></i>937 68 28 69</p>
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
          <form className="form_contact" onSubmit={handleSubmit}>
            <h2>Envia un mensaje</h2>
            <div className="user_info">
              <label htmlFor="names">Nombres *</label>
              <input type="text" id="names" name="names" value={formData.names} onChange={handleChange} />

              <label htmlFor="phone">Teléfono</label>
              <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} />

              <label htmlFor="email">Correo eléctronico *</label>
              <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} />

              <label htmlFor="mensaje">Mensaje *</label>
              <textarea className='textoMsj' id="mensaje" name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>

              <input className="botonContacto" type="submit" value="Enviar Mensaje" id="btnSend" />
            </div>
          </form>
        </section>
      </div>
    </>
  );
}