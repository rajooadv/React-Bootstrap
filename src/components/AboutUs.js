import React from 'react'
import { Container } from 'react-bootstrap'
import '../style/AboutUs.css'
export default function AboutUs() {
  return (
    <>
      <Container id='aboutMain'>
        <div className="img">
          <img id='about1' src="https://raw.githubusercontent.com/themewagon/HighTechIT/main/img/about-1.jpg" alt="" />
          <img id='about2' src="https://raw.githubusercontent.com/themewagon/HighTechIT/main/img/about-2.jpg" alt="" />
        </div>

        <div className="aboutUs">
          <h5 className='aboutHeading' >About Us</h5>
          <h1 className="headingPara">About HighTech Agency And It's Innovative IT Solutions</h1>
          <div className="paras">
            <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur quis purus ut interdum. Pellentesque aliquam dolor eget urna ultricies tincidunt. Nam volutpat libero sit amet leo cursus, ac viverra eros tristique. Morbi quis quam mi. Cras vel gravida eros. Proin scelerisque quam nec elementum viverra. Suspendisse viverra hendrerit diam in tempus. Etiam gravida justo nec erat vestibulum, et malesuada augue laoreet.</p>
            <p className='para'>Pellentesque aliquam dolor eget urna ultricies tincidunt. Nam volutpat libero sit amet leo cursus, ac viverra eros tristique. Morbi quis quam mi. Cras vel gravida eros. Proin scelerisque quam nec elementum viverra. Suspendisse viverra hendrerit diam in tempus.</p>
          </div>
          <br />
          <a href="#" className='moreDetails'>More Details</a>
        </div>
      </Container>
    </>
  )
}
