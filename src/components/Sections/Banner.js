import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import Logo from '../../assets/images/master-logo.png'

const Banner = () => {
    return (
        <div className='home-banner'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={8} className='mb-md-0 mb-4'>
                        <h1 className='mb-md-5 mb-4'>Empowering the Decentralized Financial System on Algorand</h1>
                        <p className='lead'>Since 2018, MasterMind has invested in cryto assets and blockchain companies, providing investors with the full spectrum of exposure to the space.</p>
                    </Col>
                    <Col md={4}>
                        <img src={Logo} alt="logo" className='img-fluid' />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;