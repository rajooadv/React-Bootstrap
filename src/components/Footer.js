import React from 'react'
import '../style/footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

export default function Footer() {
    return (
        <>
            <footer>
                <Container id='footerContainer'>
                    <div className="topOfHeader">
                        <div className="aOfHeader">
                            <h1 id='logoOfFooter'>HIGH<span>TECH</span></h1>
                            <p className='footerDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facere delectus qui placeat inventore consectetur repellendus optio debitis.</p>
                            <div className="socialIcons">
                                <i className="fa-brands fa-facebook-f" id='social'></i>
                                <i class="fa-brands fa-twitter" id='social'></i>
                                <i class="fa-brands fa-instagram" id='social'></i>
                                <i class="fa-brands fa-linkedin" id='social'></i>
                            </div>
                        </div>

                        <div className="shortLinks">
                            <h1 className='shortLinkHeading'>Short Links</h1>
                            <div className="footerLinks">
                                <a href="#"><i class="fas fa-angle-right me-2"/>About Us</a>
                                <a href="#"><i class="fas fa-angle-right me-2"/>Contact Us</a>
                                <a href="#"><i class="fas fa-angle-right me-2"/>Our Services</a>
                                <a href="#"><i class="fas fa-angle-right me-2"/>Our Projects</a>
                                <a href="#"><i class="fas fa-angle-right me-2"/>Latest Blog</a>
                            </div>
                        </div>


                        <div className="shortLinks">
                            <h1 className='shortLinkHeading'>Help Links</h1>
                            <div className="footerLinks">
                                <a href="#"><i class="fas fa-angle-right me-2"/>Terms of Use</a>
                                <a href="#"><i class="fas fa-angle-right me-2"/>Privacy Policy</a>
                                <a href="#"><i class="fas fa-angle-right me-2"/>Helps</a>
                                <a href="#"><i class="fas fa-angle-right me-2"/>FAQ's</a>
                                <a href="#"><i class="fas fa-angle-right me-2"/>Contact</a>
                            </div>
                        </div>

                        <div className="footerContactUs">
                            <h1 className='shortLinkHeading'>Contact Us</h1>
                            <div className="footerLinks footerLastLink">
                                <a href="#"><i class="fa-solid fa-location-dot"></i>123 Street, New York, USA</a>
                                <hr />
                                <a href="#"> <i class="fa-solid fa-phone"></i> +123 456 7890 </a>
                                <hr />
                                <a href="#"><i class="fa-solid fa-envelope"></i> Email@Email.com</a>
                                <hr />
                            </div>
                        </div>

                    </div>
                    <div className="footerFoot">
                        <div className="footerDescFoot">
                            <p>  <span>Your Site Name </span>All rights reserved</p>
                        </div>

                        <div className="footerDesignBy">
                            <p>Designed by <span>HTML Codex</span>Distributed by <span>ThemeWagon</span> </p>
                        </div>
                    </div>
                </Container>
            </footer>


        </>
    )
}
