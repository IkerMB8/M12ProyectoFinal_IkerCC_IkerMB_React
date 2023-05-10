import  React  from 'react';
import './servicios.css';

export default function Contacta() { 

  return (
    <>
        <div className='positioning'>
            <h1 className='titContacta' id="linkServicios">SERVICIOS</h1>
            <section class="servicios_div_1">
                <div className='bg_serv'>
                    <img src='/men.jpg' className='img_Servicios'></img>
                    <div className='div_Servicios_izq'>
                        <h1 className='h1_Servicios'><span className='h1_Servicios_Span'>M</span>EN</h1>
                        <p>En Christian Ríos creemos que la base del corte masculino perfecto se fundamenta en un dominio técnico excelente, así como en la personalización. Es indudable que nuestro equipo cuenta con un alto nivel de formación, así como con experiencia que hacen posible que los looks sean simplemente perfectos. Por lo que tenemos en cuenta diferentes aspectos como la forma del rostro, la textura y la estructura del cabello para que el corte potencie la imagen e identidad de cada uno de nuestros clientes.</p>
                    </div>
                </div>
            </section>

            <section class="servicios_div_2">
                <div className='bg_serv'>
                    <div className='div_Servicios_der'>
                        <h1 className='h1_Servicios'><span className='h1_Servicios_Span'>C</span>OLOR</h1>
                        <p>En cada uno de nuestros servicios buscamos la excelencia, siguiendo siempre un protocolo en el que el color se crea de forma personalizada según las preferencias y características de cada persona. Por tanto, el equipo se forma constantemente para estar al día de todas las novedades en técnicas y tendencias que garantizan un resultado perfecto.</p>
                    </div>
                    <img src='/color.jpg' className='img_Servicios'></img>
                </div>     
            </section>
        </div>
    </>
    );
}