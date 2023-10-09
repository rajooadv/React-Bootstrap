import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../style/ImageCrousel.css'


export default function ImageCrousel() {

 
  return (
    <>
      <Carousel fade id='imageCrouselDiv'>
        <Carousel.Item>
          <img src="https://raw.githubusercontent.com/themewagon/HighTechIT/main/img/carousel-1.jpg" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://raw.githubusercontent.com/themewagon/HighTechIT/main/img/carousel-2.jpg" />
        </Carousel.Item>
      </Carousel>

      <Carousel.Caption id='crouselCaption'>
        <h3>Best IT Solutions</h3>
        <h1>Quality Digital Services You Really Need!</h1>
        <p>Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Pellentesque aliquam dolor eget urna ultricies tincidunt.</p>
        <div className="buttons">
          <a href="#">Read More</a>
          <a href="#">Contact Us</a>
        </div>
      </Carousel.Caption>
    </>
  )
}
