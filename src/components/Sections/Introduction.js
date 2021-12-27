import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'

const Introduction = () => {
    return (
        <div className='mt-80'>
            <Container fluid="lg">
                <Row className='gx-0'>
                    <Col md={6} className='mb-md-0 order-md-2 mb-4'>
                        <div className="content-box d-flex">
                            <div className="m-auto">
                                <h3>A history of firsts</h3>
                                <p className="lead">MasterMind crew launched the first cryptocurrency fund in the U.S. when bitcoin was at $3000 /BTC in late 2018.  The firm subsequently launched the first blockchain-focused venture fund and partnered with Boson Labs, one of the very first R&D firm focusing on innovating DeFi Apps exlcusively on Algorand blockchain. Boson Labs helps MasterMind choose the right startups from funding and legal aspects</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className='mb-md-0 mb-4 mt-md-5 pt-md-5'>
                        <div className="content-box d-flex mt-md-5">
                            <div className="m-auto">
                                <h3>MasterMind at a glance</h3>
                                
                                <Row className='text-center mt-5'>
                                    <Col md={4} className='mb-md-0 mb-5'>
                                        <h4>$50 million</h4>
                                        <p className="lead">Assets under management</p>
                                    </Col>
                                    <Col md={4} className='mb-md-0 mb-5'>
                                        <h4>3</h4>
                                        <p className="lead">Fund strategies</p>
                                    </Col>
                                    <Col md={4} className='mb-md-0 mb-5'>
                                        <h4>5000</h4>
                                        <p className="lead">Investors</p>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Introduction;