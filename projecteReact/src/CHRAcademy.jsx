import './chracademy.css';
import { useEffect } from "react";


export default function CHRAcademy() {
    
    useEffect(() => {
        function giro(elemento) {
            elemento.classList.toggle("giro");
        }
    });
    return (
        <>
        <div className='positioning' id='linkCHR'>
            <div className='chracademy'>
                <div className='bg_chr'>
                    <div className='arribaCHR'><img src='/CHRAcademy.png'></img></div>

                    <div className='medioCHR'>
                        <h1>CHR ACADEMY</h1>
                        <p>Fruto de años de trabajo en el salón y en combinación con el expertise alcanzado con las más de 15 colecciones en tan solo 3 años. En este sentido el futuro de Christian Ríos apunta con firmeza hacia el ámbito de las formaciones. Para empezar su primera propuesta formativa ofrecerá a los asistentes las técnicas y tendencias más destacadas y punteras del momento.</p>
                        <p>Por tanto, estas formaciones se imparten en una ubicación ideal como es Christian Ríos Hair Couture, un salón amplío, luminoso y que cumple todos los requerimientos para ofrecer una experiencia formativa de alta calidad.</p>
                    </div>

                    <div className='abajoCHR'>                      
                        <ul className="boxCHR">
                            <li className="flip-container">
                                <div className="flipper">
                                    <div className="front">
                                        <h2>THRILOGY</h2>
                                        <p>CORTE, MODA Y COLOR</p>
                                        <p>Unas sesiones pensadas para satisfacer a todos aquellos peluqueros que que desean conocer cuáles son las tendencias anuales de moda más importantes de la temporada, y cómo aplicarlas tanto en corte, color y texturas. Por tanto, el contenido se va actualizando cada año en base a las tendencias más punteras.</p>
                                    </div>
                                    <div className="back">
                                        <p><span className='bold'>Duración: </span>2 días (domingo y lunes)</p>
                                        <p><span className='bold'>Horario: </span>9.30H - 17.30H</p>
                                        <p><span className='bold'>Incluye: </span>Maniquíes. Los asistentes deberán traer sus propias herramientas (cepillos, peines, tijeras, secador,..)</p>
                                        <p><span className='bold'>Formato: </span>Teoría, Demostración, Lunch Break,  Workshop en Maniquíes</p>
                                        <a className='raise' href='#linkContacta'>Más Información</a>
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <ul className="boxCHR">
                            <li className="flip-container">
                                <div className="flipper">
                                    <div className="front">
                                        <h2>ESSENTIAL M</h2>
                                        <p>Essential M es la formación perfecta para todos aquellos profesionales que quieran mejorar sus conocimientos de peluquería masculina. Durante la sesión se presentará la última colección masculina de Christian Ríos y se trabajarán las técnicas, conocimientos y habilidades necesarios para llevar a cabo un trabajo de vanguardia que haga que el profesional despunte y que de esta forma se diferencie de su competencia.</p>
                                    </div>
                                    <div className="back">
                                        <p><span className='bold'>Duración: </span>1 día (lunes)</p>
                                        <p><span className='bold'>Horario: </span>9.30H - 17.30H</p>
                                        <p><span className='bold'>Incluye: </span>Maniquíes. Los asistentes deberán traer sus propias herramientas (cepillos, peines, tijeras, secador,..)</p>
                                        <p><span className='bold'>Formato: </span>Teoría, Demostración, Lunch Break,  Workshop en Maniquíes</p>
                                        <a className='raise' href='#linkContacta'>Más Información</a>
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <ul className="boxCHR">
                            <li className="flip-container">
                                <div className="flipper">
                                    <div className="front">
                                        <h2>ESSENTIAL W</h2>
                                        <p>Essential W es la formación perfecta para todos aquellos profesionales que quieran mejorar sus conocimientos de peluquería femenina. Durante la sesión se presentará la última colección femenina de Christian Ríos y se trabajarán las técnicas, conocimientos y habilidades necesarios para llevar a cabo un trabajo de vanguardia que haga que el profesional despunte y se diferencie de su competencia.</p>
                                    </div>
                                    <div className="back">
                                        <p><span className='bold'>Duración: </span>1 día (lunes)</p>
                                        <p><span className='bold'>Horario: </span>9.30H - 17.30H</p>
                                        <p><span className='bold'>Incluye: </span>Maniquíes. Los asistentes deberán traer sus propias herramientas (cepillos, peines, tijeras, secador,..)</p>
                                        <p><span className='bold'>Formato: </span>Teoría, Demostración, Lunch Break,  Workshop en Maniquíes</p>
                                        <a className='raise' href='#linkContacta'>Más Información</a>
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <ul className="boxCHR">
                            <li className="flip-container">
                                <div className="flipper">
                                    <div className="front">
                                        <h2>ESSENTIAL BLOND'S</h2>
                                        <p>La excelencia de los rubios, a  tu alcance en pocas horas. En primer lugar, Essential Blond's es una formación de peluquería tanto femenina  como masculina dedicada a trabajos de rubios: fondos de decoloración, alturas de tonos y matices adecuados para cada decoloración global. Para continuar, durante la sesión se tratarán  las técnicas más comerciales (balayage, melting, contouring, etc.), pero también las más editoriales aplicables a trabajos más creativos y de moda.</p>
                                    </div>
                                    <div className="back">
                                        <p><span className='bold'>Duración: </span>1 día (lunes)</p>
                                        <p><span className='bold'>Horario: </span>9.30H - 17.30H</p>
                                        <p><span className='bold'>Incluye: </span>Maniquíes. Los asistentes deberán traer sus propias herramientas (cepillos, peines, tijeras, secador,..)</p>
                                        <p><span className='bold'>Formato: </span>Teoría, Demostración, Lunch Break,  Workshop en Maniquíes</p>
                                        <a className='raise' href='#linkContacta'>Más Información</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> 
        </div>
        </>
    );
};