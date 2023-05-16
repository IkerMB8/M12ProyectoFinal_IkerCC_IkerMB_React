import  React  from 'react';
import './contacta.css';

export default function Contacta() { 

  return (
    <>
    <div className='positioning'>
      <h1 className='titContacta' id="linkContacta">CONTACTA CON NOSOTROS</h1>
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
        <form action="" className="form_contact">
          <h2>Envia un mensaje</h2>
          <div className="user_info">
            <label for="names">Nombres *</label>
            <input type="text" id="names"/>

            <label for="phone">Teléfono</label>
            <input type="text" id="phone"/>

            <label for="email">Correo eléctronico *</label>
            <input type="text" id="email"/>

            <label for="mensaje">Mensaje *</label>
            <textarea className='textoMsj' id="mensaje"></textarea>
            <input type="button" value="Enviar Mensaje" id="btnSend"/>
          </div>
        </form>
      </section>
    </div>
    </>
  );
}