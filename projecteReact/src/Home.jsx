import './index.css';
import Equipo from './Equipo';
import Servicios from './Servicios';
import Salon from './Salon';
import Premios from './Premios';
import Colecciones from './Colecciones';
// import CHRAcademy from './CHRAcademy';
// import Feed from './Feed';
// import Citas from './Citas';
// import Productes from './Productes';
import Contacta from './Contacta';

export default function Home() {
    
    return (
        <> 
            <div class="divVideo" id='/'>
                <div>
                    <h1 class="divVideo__titulo">CHR</h1>
                    <h2 class="divVideo__titulo_h2">CHRISTIAN RÍOS HAIR</h2>
                    <p>Las últimas tendencias para tu look de la mano de los mejores estilistas de Vilanova y la Geltrú</p>
                </div>
            </div>
            <Equipo></Equipo>
            <Servicios></Servicios>
            <Salon></Salon>
            <Premios></Premios>
            <Colecciones></Colecciones>
            {/* <CHRAcademy></CHRAcademy> */}
            {/* <Feed></Feed> */}
            {/* <Citas></Citas> */}
            {/* <Productes></Productes> */}
            <Contacta></Contacta>
        </>
    )
}