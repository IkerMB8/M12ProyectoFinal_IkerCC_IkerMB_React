import './equipo.css'

export default function Equipo() {
    return (
        <> 
            <div className='pagina'>
                <div className='equipo'>
                    <h1>NUESTRO EQUIPO</h1>
                    <h2>PELUQUERÍA EN VILANOVA I LA GELTRÚ</h2>
                    <div className='square'>
                        <div className='evento-individual chris'>
                            <img src="../public/Christian-Rios.jpg" className='foto_esdeveniment' alt="Foto esdeveniment" />
                            <div class="overlayChris">
                                <div class="chris2">
                                <h1>
                                    CHRISTIAN RÍOS
                                </h1>
                                <p>Fundador y director de la firma. Formado entre otros, con Miguel Griñó en BCN, en Stick Art Studio de Make Up Forever y en las academias de Raffel Pages. Amplía experiencia y conocimiento a través de diversos cursos: coloración en Italia con Gogem, vanguardia con Anne Veck o corte en Londres con Roberto Masciave, entre otros.</p>
                                <div class="socials mt-20">
                                    <a href="https://www.facebook.com/christian.riostorres.1"><i class="bi bi-facebook"></i></a>
                                    <a href="https://www.instagram.com/khrystyan28/"><i class="bi bi-instagram"></i></a>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className='evento-individual claudio'>
                            <img src="../public/Claudio.jpg" className='foto_esdeveniment' alt="Foto esdeveniment" />
                            <div class="overlayClaudio">
                                <div class="claudio2">
                                    <h1>
                                        CLAUDIO GUIRAO  
                                    </h1>
                                    <div class="socials mt-20">
                                        <a href="#"><i class="bi bi-facebook"></i></a>
                                        <a href="https://www.instagram.com/claudiogap_/"><i class="bi bi-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='evento-individual jana'>
                            <img src="../public/Jana.jpg" className='foto_esdeveniment' alt="Foto esdeveniment" />
                            <div class="overlayJana">
                                <div class="jana2">
                                    <h1>
                                        JANA
                                    </h1>
                                    <div class="socials mt-20">
                                        <a href="#"><i class="bi bi-facebook"></i></a>
                                        <a href="#"><i class="bi bi-twitter"></i></a>
                                        <a href="#"><i class="bi bi-instagram"></i></a>
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