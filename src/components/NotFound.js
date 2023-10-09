import React from 'react'
import { Container } from 'react-bootstrap'
import '../style/notFound.css'
export default function NotFound() {
    return (
        <>
            <Container>
                <div className="mainDivOfNotFound">

                    <i class="bi bi-exclamation-triangle display-1 text-primary"></i>
                    <h1 className='fourOfour'>404</h1>
                    <h1>Not Found</h1>
                    <p>We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                    <a href="#">Go Back to Home</a>
                </div>
            </Container>
        </>
    )
}
