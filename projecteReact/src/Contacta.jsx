import  React  from 'react';
import './contacta.css';
import google from 'google-maps-react'

export default function Contacta() {

  function initialize() {
    var mapOptions = {
      center: new google.maps.LatLng(28.1823295, -82.352912),
      zoom: 9,
      mapTypeId: google.maps.MapTypeId.HYBRID,
      scrollwheel: false,
      draggable: false,
      panControl: true,
      zoomControl: true,
      mapTypeControl: true,
      scaleControl: true,
      streetViewControl: true,
      overviewMapControl: true,
      rotateControl: true,
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  }
  google.maps.event.addDomListener(window, 'load', initialize);
  

  return (
    <>
      <div class="contact" id="contact">
        <div class="container">
          <div class="col-md-offset-1 col-md-10">
            <h2>Contact Me<i class="fa fa-paper-plane-o"></i></h2>
            <div id="map-canvas"></div>
          </div>
          <form method="post" action="contact.php" name="contactform" id="contactform">
            <div class="col-md-offset-1 col-md-5">
              <fieldset>
                <input name="name" type="text" id="name" size="30" placeholder="Name"/>
                <br/>
                <input name="email" type="text" id="email" size="30" placeholder="Email"/>
                <br/>
                <input name="phone" type="text" id="phone" size="30" placeholder="Phone"/>
                <br/>
                <input name="human" type="text" id="human" size="30" placeholder="Prove your not a robot... What is 2+2?"/>
                <br/>
              </fieldset>
            </div>
            <div class="col-md-5">
              <fieldset>
                <textarea name="comments" cols="40" rows="20" id="comments" placeholder="Message"></textarea>
              </fieldset>
            </div>
            <div class="col-md-offset-1 col-md-10">
              <fieldset>
                <button type="submit" class="btn btn-lg" id="submit" value="Submit">Send Message</button>
              </fieldset>
            </div>
          </form>
        </div>
      </div>
      <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js"></script>
    </>
  );
}