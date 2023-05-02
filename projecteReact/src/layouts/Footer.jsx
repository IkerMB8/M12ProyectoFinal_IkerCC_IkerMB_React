import  React  from 'react';
import './footer.css'

export default function Footer() {
  return (
    <>
      <div className='footer'>
        <div className="left">
        </div>
        <div className="center">
          <div id="copyright" class="clr" role="contentinfo">© 2021 Todos Los Derechos Reservados.</div>
        </div>
        <div className="right">
          <a href="https://www.instagram.com/christianriossalon/" target='_blank'><i class="bi bi-instagram"></i></a>
          <a href="https://www.facebook.com/profile.php?id=100063639999865" target='_blank'><i class="bi bi-facebook"></i></a>
        </div>
      </div>
    </>
  );
}