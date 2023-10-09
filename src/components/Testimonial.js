import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Col, Container, Row, Card, Button } from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import '../style/testimonial.css'
export default function OurTeam() {


    return (
        <div id='TestimonialDiv'>

            <div className="servicesHeader">
                <h4 className='services'>Our Testimonial</h4>
                <h1 className='headingServices'>Our Client Saying!</h1>
            </div>
            <Container id='testContainer'>
                <Carousel >
                    <Carousel.Item>

                        <div className="parentOfTestimonial">
                            <div className="testIndiv">
                                <div className="headerOfTestIndv">
                                    <img src="https://raw.githubusercontent.com/themewagon/HighTechIT/main/img/testimonial-1.jpg" alt="" />
                                    <div class="descOfTestIndv">
                                        <h1>Client Name</h1>
                                        <p>Profession</p>
                                        <div className="starsOfTestIndv">
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="footerDescTestIndv">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, sapiente sunt. Eos cum magni ex
                                        quisquam ipsam id.</p>
                                </div>
                            </div>
                        </div>


                    </Carousel.Item>
                    {/* <Carousel.Item>
                   
                    </Carousel.Item> */}
                </Carousel>
            </Container>

        </div>
    )
}
