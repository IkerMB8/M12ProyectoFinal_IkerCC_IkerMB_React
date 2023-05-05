import  React  from 'react';
import './contacta.css';
import google from 'google-maps-react'

export default function Contacta() { 

  return (
    <>
      <section className="form_wrap">
        <section className="cantact_info">
            <section className="info_title">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.8254124243344!2d1.7176336767890341!3d41.22557497132093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a386fd0cf9c929%3A0xc95528801531d62c!2sChristian%20Rios%20Hairdressing%20%26%20Barber!5e0!3m2!1sca!2ses!4v1683127870362!5m2!1sca!2ses" width="400" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>
            <section className="info_items">
                <p><span className="fa fa-envelope"></span> info.contact@gmail.com</p>
                <p><span className="fa fa-mobile"></span> +1(585) 902-8665</p>
                <p><span className="fa fa-mobile"></span> Carrer dels Picapedrers, 27, 08800 Vilanova i la Geltrú, Barcelona</p>
            </section>
        </section>
        <form action="" className="form_contact">
            <h2>Envia un mensaje</h2>
            <div className="user_info">
              <label for="names">Nombres *</label>
              <input type="text" id="names"/>

              <label for="phone">Telefono / Celular</label>
              <input type="text" id="phone"/>

              <label for="email">Correo electronico *</label>
              <input type="text" id="email"/>

              <label for="mensaje">Mensaje *</label>
              <textarea id="mensaje"></textarea>
              <input type="button" value="Enviar Mensaje" id="btnSend"/>
            </div>
        </form>
      </section>
    </>
  );
}