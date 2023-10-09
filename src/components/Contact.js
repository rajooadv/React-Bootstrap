import React from 'react'
import '../style/contact.css'
import { Container, Form } from 'react-bootstrap'
export default function Contact() {
    return (
        <>
            <Container id='contactContainer'>
                <div className="servicesHeader">
                    <h4 className='services'>Get In Touch</h4>
                    <h1 className='headingServices'>Contact for any query</h1>
                    <p className='descContact'>The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="#"> Download Now.</a></p>
                </div>

                <div className="contactsInfo">
                    <div className="addressOfContact">
                        <i class="fa-solid fa-location-dot"></i>
                        <div className="descOfAddress">
                            <h2 className='addressText'>Address</h2>
                            <h3 className='addressTextInfo'>23 rank Str, NY</h3>
                        </div>
                    </div>

                    <div className="addressOfContact">
                        <i class="fa-solid fa-location-dot"></i>
                        <div className="descOfAddress">
                            <h2 className='addressText'>Call Us</h2>
                            <h3 className='addressTextInfo'>+012 3456 7890</h3>
                        </div>
                    </div>


                    <div className="addressOfContact">
                        <i class="fa-solid fa-location-dot"></i>
                        <div className="descOfAddress">
                            <h2 className='addressText'>Email</h2>
                            <h3 className='addressTextInfo'>info@example.com</h3>
                        </div>
                    </div>
                </div>

                <div className="formNmap">
                    <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m8!1m3!1d1780983.5647743675!2d69.8358779!3d29.3268221!3m2!1i1024!2i768!4f13.1!4m5!3e6!4m0!4m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUSA!5e0!3m2!1sen!2s!4v1696676095973!5m2!1sen!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="formDiv">
                        <Form>
                            <div class="form-group">
                                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Your Name" />
                            </div>
                            <br />

                            <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                            <br />
                            <input type="text" class="form-control" id="inputEmail4" placeholder="Project" />
                            <br />
                            <div class="mb-3">
                                <textarea class="form-control" id="validationTextarea" placeholder="Message" required></textarea>
                            </div>
                            <a href="#" id='sendMessageContact'>Send Message</a>
                        </Form>
                    </div>
                </div>



            </Container>
        </>
    )
}
