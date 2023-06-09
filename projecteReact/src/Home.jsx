import './index.css';
import Equipo from './Equipo';
import Servicios from './Servicios';
import Salon from './Salon';
import Premios from './Premios';
import Colecciones from './Colecciones';
import CHRAcademy from './CHRAcademy';
// import Feed from './Feed';
// import Citas from './Citas';
import Contacta from './Contacta';

export default function Home() {
    
    return (
        <> 
            <div className="divVideo" id='/'>
                <div>
                    <h1 className="divVideo__titulo">CHR</h1>
                    <h2 className="divVideo__titulo_h2">CHRISTIAN RÍOS HAIR</h2>
                    <p>Las últimas tendencias para tu look de la mano de los mejores estilistas de Vilanova y la Geltrú</p>
                </div>
            </div>
            <Equipo></Equipo>
            <Servicios></Servicios>
            <Salon></Salon>
            <Premios></Premios>
            <Colecciones></Colecciones>
            <CHRAcademy></CHRAcademy>
            <Contacta></Contacta>
        </>
    )
}