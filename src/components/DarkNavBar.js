import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
// import { Navbar, Container } from 'react-bootstrap';
import '../style/darkNav.css'
import 'font-awesome/css/font-awesome.min.css';


// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';


export default function DarkNavBar() {
  return (
    <>
      <div className="darkNav">
        <div className="left">

          <div className="address">
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            <span>23 Ranking Street, New York</span>
          </div>
          <div className="mail">
            <i class="fa fa-envelope" aria-hidden="true"></i>
            <spn>Email@Example.com</spn>
          </div>

        </div>
        <div className="marquee">
          <marquee width="60%" direction="right" height="100px" scrollamount="12">
            Note : We help you to Grow your Busines
          </marquee>
        </div>
        <div className="socialIcons">
          <i className="fa-brands fa-facebook-f" id='social'></i>
          <i class="fa-brands fa-twitter" id='social'></i>
          <i class="fa-brands fa-instagram" id='social'></i>
          <i class="fa-brands fa-linkedin" id='social'></i>
        </div>


      </div >
    </>
  )
}
