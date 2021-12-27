import React from 'react';
import Layout from './Layout';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

const SingleBid = () => {
    return (
        <Layout>
            <Container>
                <Row className='gx-5 mb-5'>
                    <Col md={6} className='mb-md-0 mb-5'>
                        <h3>MasterMind Funds</h3>
                        <p className='lead mb-4'>Our funds provide investors with the full spectrum of exposure to the blockchain space, ranging from illiquid venture capital assets (including early-stage tokens and multi-stage venture capital equity) to more liquid assets like bitcoin and other cryptocurrencies.</p>
                        <p className='lead mb-4'>MasterMind manages $50 million in blockchain-related assets.  Funds are available to accredited investors, with minimums of $100,000 or more.</p>
                        <p className='lead mb-4'>If you meet the above requirements and are interested in learning more, please fill out the form below to be sent additional information.</p>
                        <p className='lead mb-4'>You can also contact our Investor Relations team directly at <a href="mailto:info@mastermind-ventures.com">info@mastermind-ventures.com</a>.</p>
                    </Col>

                    <Col md={6}>
                        <h5>INVESTOR INQUIRY</h5>
                        <Form>
                            <Row>
                                <Form.Group className="mb-3 col-sm-6">
                                    <Form.Label>First name<sup>*</sup></Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group className="mb-3 col-sm-6">
                                    <Form.Label>Last name<sup>*</sup></Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group className="mb-3 col-sm-6">
                                    <Form.Label>Email<sup>*</sup></Form.Label>
                                    <Form.Control type="email" />
                                </Form.Group>
                                <Form.Group className="mb-3 col-sm-6">
                                    <Form.Label>City<sup>*</sup></Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group className="mb-3 col-sm-6">
                                    <Form.Label>Company name<sup>*</sup></Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group className="mb-3 col-sm-6">
                                    <Form.Label>Job title<sup>*</sup></Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group className="mb-3 col-sm-12">
                                    <Form.Label>Phone number<sup>*</sup></Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group className="mb-3 col-sm-12">
                                    <Form.Label>Investor type<sup>*</sup></Form.Label>
                                    <Form.Select>
                                        <option>Please Select</option>
                                        <option value="1">Advisor</option>
                                        <option value="2">Individual Investor</option>
                                        <option value="3">Institutional Investor</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3 col-sm-12">
                                    <Form.Label>Additional Questions:</Form.Label>
                                    <Form.Control as="textarea" />
                                </Form.Group>
                            </Row>
                            <Button type="submit" variant='dark' size='lg' className='w-100'>Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

export default SingleBid;