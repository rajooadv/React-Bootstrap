import React from 'react';
import { Col, Container, Row, Card, Button } from 'react-bootstrap'
import '../style/projects.css'

export default function Projects() {
    return (
        <>
            <Container>
                <div className="servicesHeader">
                    <h4 className='services'>Our Project</h4>
                    <h1 className='headingServices'>Our Recently Completed Projects</h1>
                </div>

                <Row className='gy-3 my-6'>


                    <Col className='col-12 col-sm-6 col-md-4 col-lg-4  colImg' >
                        <Card id='imgCardDiv'>
                            <div className="content">
                                <h1>Web Desing</h1>
                                <p>Web Analysis</p>
                            </div>
                        <Card.Img src='https://raw.githubusercontent.com/themewagon/HighTechIT/main/img/project-1.jpg' className='cardImg'/>
                        </Card>
                    </Col>


                    <Col className='col-12 col-sm-6 col-md-4 col-lg-4  colImg' >
                        <Card id='imgCardDiv'>
                            <div className="content">
                                <h1>Web Desing</h1>
                                <p>Web Analysis</p>
                            </div>
                        <Card.Img src='https://raw.githubusercontent.com/themewagon/HighTechIT/main/img/project-2.jpg' className='cardImg'/>
                        </Card>
                    </Col>

                    
                    <Col className='col-12 col-sm-6 col-md-4 col-lg-4  colImg' >
                        <Card id='imgCardDiv'>
                            <div className="content">
                                <h1>Web Desing</h1>
                                <p>Web Analysis</p>
                            </div>
                        <Card.Img src='https://raw.githubusercontent.com/themewagon/HighTechIT/main/img/project-3.jpg' className='cardImg'/>
                        </Card>
                    </Col>

                    <Col className='col-12 col-sm-6 col-md-4 col-lg-4  colImg' >
                        <Card id='imgCardDiv'>
                            <div className="content">
                                <h1>Web Desing</h1>
                                <p>Web Analysis</p>
                            </div>
                        <Card.Img src='https://raw.githubusercontent.com/themewagon/HighTechIT/main/img/project-4.jpg' className='cardImg'/>
                        </Card>
                    </Col>

                    <Col className='col-12 col-sm-6 col-md-4 col-lg-4  colImg' >
                        <Card id='imgCardDiv'>
                            <div className="content">
                                <h1>Web Desing</h1>
                                <p>Web Analysis</p>
                            </div>
                        <Card.Img src='https://raw.githubusercontent.com/themewagon/HighTechIT/main/img/project-5.jpg' className='cardImg'/>
                        </Card>
                    </Col>

                    <Col className='col-12 col-sm-6 col-md-4 col-lg-4  colImg' >
                        <Card id='imgCardDiv'>
                            <div className="content">
                                <h1>App Desing</h1>
                                <p>App Analysis</p>
                            </div>
                        <Card.Img src='https://raw.githubusercontent.com/themewagon/HighTechIT/main/img/project-6.jpg' className='cardImg'/>
                        </Card>
                    </Col>


                </Row>



            </Container>
        </>
    )
}
