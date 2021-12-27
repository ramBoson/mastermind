import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'

const InvestmentType = () => {
    return (
        <div className='our-funds mt-80'>
            <Container>
                <div className="text-center pb-md-4 pb-3">
                    <h3>Investment types</h3>
                </div>

                <Row>
                    <Col md={4}>
                        <div className="content-card">
                            <h5 className='text-uppercase'>VENTURE EQUITY</h5>
                            <p>Exposure to equity in companies building products and services in the nascent blockchain ecosystem. Our long standing reputation and technical edge allows us to see virtually every deal in the market, and lead about half of our portfolio company investments.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="content-card">
                            <h5 className='text-uppercase'>EARLY-STAGE TOKENS</h5>
                            <p>Exposure to new, efficient, and scalable protocols. Similar to venture capital equity, but investing in tokens (not companies) during the private stage at a discount to the listing price.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="content-card">
                            <h5 className='text-uppercase'>LIQUID TOKENS</h5>
                            <p>Exposure to the largest and most liquid digital assets. We use our deep market and technical expertise to trade tokens while exploiting market inefficiencies.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default InvestmentType;