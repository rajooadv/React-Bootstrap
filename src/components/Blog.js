import React from 'react'
import { Col, Container, Row, Card, Button } from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import '../style//blog.css'
export default function Services() {


    return (
        <div id='BlogDiv'>
            <Container>
                <div className="servicesHeader">
                    <h4 className='services'>Our Blog</h4>
                    <h1 className='headingServices'>Latest Blog & News</h1>
                </div>

                <Row className='gy-3 my-3'>

                    <Col className='col-md-4 col-sm-6 col-lg-4  columnDiv' >
                        <div className="blog">
                            <div className="blogTopic">
                                <p>Web Design</p>
                            </div>
                            <div className="top">
                                <img src="https://raw.githubusercontent.com/themewagon/HighTechIT/main/img/blog-1.jpg" alt="" className='blogThumbnail' />
                                <div className="btns">
                                    <a href="#">Read More</a>
                                    <a href="#">Share <i class="fa-solid fa-arrow-right"></i> </a>
                                </div>
                            </div>
                            <div className="bottom">
                                <img src="https://themewagon.github.io/HighTechIT/img/admin.jpg" alt="" className='authorImg' />
                                <h1 className='author'>By Daniel Martin</h1>
                                <span className='blogDate'>24 March 2023</span>
                                <p className="blogText">
                                    Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt libero sit amet
                                </p>
                            </div>
                            <div className="blogFooter">
                                <div className="shares">
                                    <i className="fas fa-share"></i>
                                    <p>5242 Shares</p>
                                </div>
                                <div className="blogComments">
                                    <i class="fa-solid fa-comments"></i>
                                    <p>5 Comments</p>
                                </div>
                            </div>
                        </div>
                    </Col>


                    <Col className='col-md-4 col-sm-6 col-lg-4  columnDiv' >
                        <div className="blog">
                            <div className="blogTopic">
                                <p>Web Design</p>
                            </div>
                            <div className="top">
                                <img src="https://raw.githubusercontent.com/themewagon/HighTechIT/main/img/blog-1.jpg" alt="" className='blogThumbnail' />
                                <div className="btns">
                                    <a href="#">Read More</a>
                                    <a href="#">Share <i class="fa-solid fa-arrow-right"></i> </a>
                                </div>
                            </div>
                            <div className="bottom">
                                <img src="https://themewagon.github.io/HighTechIT/img/admin.jpg" alt="" className='authorImg' />
                                <h1 className='author'>By Daniel Martin</h1>
                                <span className='blogDate'>24 March 2023</span>
                                <p className="blogText">
                                    Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt libero sit amet
                                </p>
                            </div>
                            <div className="blogFooter">
                                <div className="shares">
                                    <i className="fas fa-share"></i>
                                    <p>5242 Shares</p>
                                </div>
                                <div className="blogComments">
                                    <i class="fa-solid fa-comments"></i>
                                    <p>5 Comments</p>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col className='col-md-4 col-sm-6 col-lg-4  columnDiv' >
                        <div className="blog">
                            <div className="blogTopic">
                                <p>Web Design</p>
                            </div>
                            <div className="top">
                                <img src="https://raw.githubusercontent.com/themewagon/HighTechIT/main/img/blog-1.jpg" alt="" className='blogThumbnail' />
                                <div className="btns">
                                    <a href="#">Read More</a>
                                    <a href="#">Share <i class="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                            <div className="bottom">
                                <img src="https://themewagon.github.io/HighTechIT/img/admin.jpg" alt="" className='authorImg' />
                                <h1 className='author'>By Daniel Martin</h1>
                                <span className='blogDate'>24 March 2023</span>
                                <p className="blogText">
                                    Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt libero sit amet
                                </p>
                            </div>
                            <div className="blogFooter">
                                <div className="shares">
                                    <i className="fas fa-share"></i>
                                    <p>5242 Shares</p>
                                </div>
                                <div className="blogComments">
                                    <i class="fa-solid fa-comments"></i>
                                    <p>5 Comments</p>
                                </div>
                            </div>
                        </div>
                    </Col>

                </Row>


            </Container>
        </div>
    )
}
