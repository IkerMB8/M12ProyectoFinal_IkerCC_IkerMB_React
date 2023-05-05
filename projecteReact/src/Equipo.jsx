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
                            <img src="../Christian-Rios.jpg" className='foto_esdeveniment' alt="Foto esdeveniment" />
                            <div className="overlayChris">
                                <div className="chris2">
                                    <h1>
                                        CHRISTIAN RÍOS
                                    </h1>
                                    <div className="socials mt-20">
                                        <a href="https://www.facebook.com/christian.riostorres.1" target='_blank'><i className="bi bi-facebook"></i></a>
                                        <a href="https://www.instagram.com/khrystyan28/" target='_blank'><i className="bi bi-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='evento-individual claudio'>
                            <img src="../Claudio.jpg" className='foto_esdeveniment' alt="Foto esdeveniment" />
                            <div className="overlayClaudio">
                                <div className="claudio2">
                                    <h1>
                                        CLAUDIO GUIRAO  
                                    </h1>
                                    <div className="socials mt-20">
                                        <a href="#" target='_blank'><i className="bi bi-facebook" target='_blank'></i></a>
                                        <a href="https://www.instagram.com/claudiogap_/" target='_blank'><i className="bi bi-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='evento-individual jana'>
                            <img src="../Jana.jpg" className='foto_esdeveniment' alt="Foto esdeveniment" />
                            <div className="overlayJana">
                                <div className="jana2">
                                    <h1>
                                        JANA
                                    </h1>
                                    <div className="socials mt-20">
                                        <a href="#" target='_blank'><i className="bi bi-facebook"></i></a>
                                        <a href="#" target='_blank'><i className="bi bi-twitter"></i></a>
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