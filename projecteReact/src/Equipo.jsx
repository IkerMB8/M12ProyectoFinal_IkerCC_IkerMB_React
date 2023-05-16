import './equipo.css'

export default function Equipo() {
    return (
        <> 
            <div className='pagina' id="linkEquipo">
                <div className='equipo'>
                    <h1 >NUESTRO EQUIPO</h1>
                    <h2>PELUQUERÍA EN VILANOVA I LA GELTRÚ</h2>
                    <div className='square'>
                        <div className='evento-individual chris'>
                            <img src="../Christian-Rios.jpg" className='foto_esdeveniment' alt="Foto esdeveniment" />
                            <div class="overlayChris">
                                <div class="chris2">
                                    <h1 className='names'>
                                        CHRISTIAN RÍOS
                                    </h1>
                                    <p className='p_Equipo'>Fundador y director de la firma. Formado entre otros, con Miguel Griñó en BCN, en Stick Art Studio de Make Up Forever y en las academias de Raffel Pages. Amplía experiencia y conocimiento a través de diversos cursos: coloración en Italia con Gogem, vanguardia con Anne Veck o corte en Londres con Roberto Masciave, entre otros.</p>
                                    <div className="socials mt-20">
                                        <a href="https://www.facebook.com/christian.riostorres.1" target='_blank'><i className="bi bi-facebook"></i></a>
                                        <a href="https://www.instagram.com/khrystyan28/" target='_blank'><i className="bi bi-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='evento-individual claudio'>
                            <img src="../Claudio.jpg" className='foto_esdeveniment' alt="Foto esdeveniment" />
                            <div class="overlayClaudio">
                                <div class="claudio2">
                                    <h1 className='names'>
                                        CLAUDIO GUIRAO  
                                    </h1>
                                    <p className='p_Equipo'>Asistente de Dirección. Champunier especialista en tratamientos capilares.</p>
                                    <div className="socials mt-20">
                                        <a href="https://www.instagram.com/claudiogap_/" target='_blank'><i className="bi bi-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='evento-individual jana'>
                            <img src="../Jana.jpg" className='foto_esdeveniment' alt="Foto esdeveniment" />
                            <div class="overlayJana">
                                <div class="jana2">
                                    <h1 className='names'>
                                        JANA FEIXAS
                                    </h1>
                                    <div className="socials mt-20">
                                        <a href="#" target='_blank'><i className="bi bi-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}