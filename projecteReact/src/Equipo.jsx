import './equipo.css'

export default function Equipo() {
    return (
        <>
            <div className='equipo'>
                <h1>NUESTRO EQUIPO</h1>
                <h2>PELUQUERÍA EN VILANOVA I LA GELTRÚ</h2>
                <div className='square'>
                    <div className='evento-individual'>
                        <img src="../public/Christian-Rios.jpg" className='foto_esdeveniment' alt="Foto esdeveniment" />
                        <div className="div-info-eve">
                            <p>Christian Ríos</p>
                            <p>123123</p>
                            <p>123123</p>
                            <p>asdad</p>
                        </div>
                    </div>
                    <div className='evento-individual'>
                        <img src="../public/Claudio.jpg" className='foto_esdeveniment' alt="Foto esdeveniment" />
                        <div className="div-info-eve">
                            <p>Claudio </p>
                            <p>123123</p>
                            <p>123123</p>
                            <p>asdad</p>
                        </div>
                    </div>
                    <div className='evento-individual'>
                        <img src="../public/Claudio.jpg" className='foto_esdeveniment' alt="Foto esdeveniment" />
                        <div className="div-info-eve">
                            <p>Jana </p>
                            <p>123123</p>
                            <p>123123</p>
                            <p>asdad</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}