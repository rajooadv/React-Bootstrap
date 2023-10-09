import React from 'react'
import { Container } from 'react-bootstrap'
import '../style/info.css'
export default function info() {
    return (
        <>
                <Container fluid className='info'>
                    <div className="element">
                        <h5 className='number'>99</h5>
                        <h5 className='desc'>Success in getting happy customer</h5>
                    </div>

                    <div className="element">
                        <h5 className='number'>25</h5>
                        <h5 className='desc'>Thousands of successful business</h5>
                    </div>

                    <div className="element">
                        <h5 className='number'>120</h5>
                        <h5 className='desc'> Total clients who love HighTech</h5>
                    </div>

                    <div className="element">
                        <h5 className='number'>5</h5>
                        <h5 className='desc'>Stars reviews given by satisfied clients</h5>
                    </div>
                </Container>
        </>
    )
}
