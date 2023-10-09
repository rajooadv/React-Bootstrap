import React from 'react'
import { Col, Container, Row, Card, Button } from 'react-bootstrap'
import '../style/services.css'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Services() {

  return (
    <>
      <Container>
        <div className="servicesHeader">
          <h4 className='services'>Services</h4>
          <h1 className='headingServices'>Services Built Specifically For Your Business</h1>
        </div>

        <Row className='gy-3 my-3'>
          <Col className='col-md-4 col-sm-6 col-lg-4  columnDiv' >
            <Card  id='divCard'>
              <i class="fa-sharp fa-solid fa-code" id='codeIcon'></i>
              <Card.Body>
                <Card.Title>Web Design</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.
                </Card.Text>
                <a href="#" className='readMore'>More Details</a>
              </Card.Body>
            </Card>
          </Col>



          <Col className='col-md-4 col-sm-6 col-lg-4  columnDiv' >
            <Card  id='divCard'>
              <i class="fa fa-file-code" id='codeIcon'></i>
              <Card.Body>
                <Card.Title>Web Development</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.
                </Card.Text>
                <a href="#" className='readMore'>More Details</a>
              </Card.Body>
            </Card>
          </Col>

          <Col className='col-md-4 col-sm-6  columnDiv' >
            <Card  id='divCard'>
              <i class="fa fa-external-link-alt" id='codeIcon'></i>
              <Card.Body>
                <Card.Title>UI/UX Design</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.
                </Card.Text>
                <a href="#" className='readMore'>More Details</a>
              </Card.Body>
            </Card>
          </Col>


          <Col className='col-md-4 col-sm-6 col-lg-4  columnDiv' >
            <Card  id='divCard'>
              <i class="fas fa-user-secret" id='codeIcon'></i>
              <Card.Body>
                <Card.Title>Web Cecurity</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.
                </Card.Text>
                <a href="#" className='readMore'>More Details</a>
              </Card.Body>
            </Card>
          </Col>


          <Col className='col-md-4 col-sm-6 col-lg-4  columnDiv' >
            <Card  id='divCard'>
              <i class="fa fa-envelope-open" id='codeIcon'></i>
              <Card.Body>
                <Card.Title>Digital Marketing</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.
                </Card.Text>
                <a href="#" className='readMore'>More Details</a>
              </Card.Body>
            </Card>
          </Col>


          <Col className='col-md-4 col-sm-6 col-lg-4  columnDiv' >
            <Card  id='divCard'>
              <i class="fas fa-laptop" id='codeIcon'></i>
              <Card.Body>
                <Card.Title>Programming</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.
                </Card.Text>
                <a href="#" className='readMore'>More Details</a>
              </Card.Body>
            </Card>
          </Col>


        </Row>


      </Container>
    </>
  )
}
