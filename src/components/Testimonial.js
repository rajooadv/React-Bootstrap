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
                        {/* <div className="client">
                            <div className="testimonialHeader">
                                    <img src="https://raw.githubusercontent.com/themewagon/HighTechIT/main/img/team-1.jpg" alt="" />
                                <div className="profile">
                                    <h1 className='clientName'>Client Name</h1>
                                    <p>Profession</p>
                                    <div class="d-flex pe-5">
                                        <i class="fas fa-star me-1 text-primary"></i>
                                        <i class="fas fa-star me-1 text-primary"></i>
                                        <i class="fas fa-star me-1 text-primary"></i>
                                        <i class="fas fa-star me-1 text-primary"></i>
                                        <i class="fas fa-star me-1 text-primary"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="bottomTes">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed alias ipsam, atque quae, ipsa odio assumenda deleniti nostrum voluptate nihil eos repellat velit architecto eveniet? Sequi et odio quos eligendi at, est sit.</p>
                            </div>
                        </div>

                        <div className="client">
                            <div className="testimonialHeader">
                                    <img src="https://raw.githubusercontent.com/themewagon/HighTechIT/main/img/team-2.jpg" alt="" />
                                <div className="profile">
                                    <h1 className='clientName'>Client Name</h1>
                                    <p>Profession</p>
                                    <div class="d-flex pe-5">
                                        <i class="fas fa-star me-1 text-primary"></i>
                                        <i class="fas fa-star me-1 text-primary"></i>
                                        <i class="fas fa-star me-1 text-primary"></i>
                                        <i class="fas fa-star me-1 text-primary"></i>
                                        <i class="fas fa-star me-1 text-primary"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="bottomTes">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed alias ipsam, atque quae, ipsa odio assumenda deleniti nostrum voluptate nihil eos repellat velit architecto eveniet? Sequi et odio quos eligendi at, est sit.</p>
                            </div>
                        </div>


                        <div className="client">
                            <div className="testimonialHeader">
                                    <img src="https://raw.githubusercontent.com/themewagon/HighTechIT/main/img/team-3.jpg" alt="" />
                                <div className="profile">
                                    <h1 className='clientName'>Client Name</h1>
                                    <p>Profession</p>
                                    <div class="d-flex pe-5">
                                        <i class="fas fa-star me-1 text-primary"></i>
                                        <i class="fas fa-star me-1 text-primary"></i>
                                        <i class="fas fa-star me-1 text-primary"></i>
                                        <i class="fas fa-star me-1 text-primary"></i>
                                        <i class="fas fa-star me-1 text-primary"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="bottomTes">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed alias ipsam, atque quae, ipsa odio assumenda deleniti nostrum voluptate nihil eos repellat velit architecto eveniet? Sequi et odio quos eligendi at, est sit.</p>
                            </div>
                        </div> */}



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

                            <div className="testIndiv" id='secondTestIndv'>
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


                            <div className="testIndiv" id='thirdTestIndv'>
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

                            <div className="testIndiv" id='secondTestIndv'>
                                <div className="headerOfTestIndv">
                                    <img src="https://raw.githubusercontent.com/themewagon/HighTechIT/main/img/testimonial-2.jpg" alt="" />
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


                            <div className="testIndiv" id='thirdTestIndv' >
                                <div className="headerOfTestIndv">
                                    <img src="https://raw.githubusercontent.com/themewagon/HighTechIT/main/img/testimonial-3.jpg" alt="" />
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
                </Carousel>
            </Container>

        </div>
    )
}
