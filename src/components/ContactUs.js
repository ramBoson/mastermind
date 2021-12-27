import React from 'react';
import Layout from './Layout';
import {Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleBid = () => {
    return (
        <Layout>
            <Container>
                <div className="text-center mb-5 pb-md-2">
                    <h1>Contact Us</h1>
                </div>

                <Row className='mb-5'>
                    <Col md={4} className='mb-5'>
                        <h4 className="heading">Email</h4>
                        <address>
                            <h5>FUNDING INQUIRIES</h5>
                            <p>Send us your white papers & investment opportunities at: <a href="mailto:info@mastermind-ventures.com">info@mastermind-ventures.com</a></p>
                        </address>
                    </Col>
                    <Col md={4} className='mb-5'>
                        <h4 className="heading">Social</h4>

                        <div className="social">
                            <Link to="/">
                                <svg width="38" height="36" viewBox="0 0 38 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.56603 3.82127C8.56603 5.93061 6.86938 7.64254 4.77533 7.64254C2.68127 7.64254 0.984626 5.93061 0.984626 3.82127C0.984626 1.71193 2.68127 0 4.77533 0C6.86938 0 8.56603 1.71193 8.56603 3.82127ZM8.5966 10.6996H0.954056V35.1557H8.5966V10.6996ZM20.7941 10.6996H13.1974V35.1557H20.7941V22.3162C20.7941 15.1781 30.011 14.5973 30.011 22.3162V35.1557H37.6383V19.6719C37.6383 7.62726 24.004 8.07052 20.7941 14.0011V10.6996Z" fill="#15182B"></path>
                                </svg>
                            </Link>
                            <Link to="/">
                                <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 30"><path d="M37.064 3.645a15.109 15.109 0 01-4.326 1.192A7.544 7.544 0 0036.055.68a15.62 15.62 0 01-4.784 1.834 7.468 7.468 0 00-5.488-2.4c-4.86 0-8.422 4.54-7.337 9.248A21.409 21.409 0 012.933 1.49a7.551 7.551 0 002.323 10.057 7.634 7.634 0 01-3.408-.947c-.077 3.485 2.415 6.74 6.037 7.474a7.432 7.432 0 01-3.393.122 7.525 7.525 0 007.031 5.228C8.358 25.915 4.37 27.016.38 26.542a21.28 21.28 0 0011.54 3.378c13.97 0 21.873-11.8 21.384-22.393a15.14 15.14 0 003.76-3.882z" fill="#15182B"></path></svg>
                            </Link>
                        </div>
                    </Col>
                    <Col md={4} className='mb-5'>
                        <h4 className="heading">Locations</h4>

                        <h5 className='text-uppercase mb-4'>NORTH CAROLINA - USA</h5>
                        <h5 className='text-uppercase'>BoonLay - Singapore</h5>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

export default SingleBid;