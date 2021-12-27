import React from 'react';
import Layout from './Layout';
import {Container, Row, Col, Table} from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";

const Portfolio = () => {
    return (
        <Layout>
            <Container>
                <Row className='gx-5 text-center mb-5'>
                    <Col md={10} lg={9} className='mx-auto'>
                        <h3>A DeFi portfolio</h3>
                        <p className='lead mb-4'>We invest in DeFi projects that are core infrastructure pieces of the blockchain ecosystem, such as exchanges, custodians, institutional trading tools, decentralized finance, next gen payment systems, and more. Since 2018, we have backed more than 25 blockchain companies and 10 early-stage token deals.</p>
                    </Col>
                </Row>

                <div className="mb-5 pb-md-5">
                    <Table responsive striped hover>
                        <thead>
                            <tr>
                                <th>NAME</th>
                                <th>Type</th>
                                <th>SECTOR</th>
                                <th width="130">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Synthetix (Haven)</td>
                                <td>Early Stage Token</td>
                                <td>DeFi</td>
                                <td><Link to="/">View More</Link></td>
                            </tr>
                            <tr>
                                <td>BSCPAD</td>
                                <td>Early Stage Token</td>
                                <td>DeFi</td>
                                <td><Link to="/">View More</Link></td>
                            </tr>
                            <tr>
                                <td>AllianceBlock</td>
                                <td>Early Stage Token</td>
                                <td>Finance</td>
                                <td><Link to="/">View More</Link></td>
                            </tr>
                            <tr>
                                <td>DevvX</td>
                                <td>Early Stage Token</td>
                                <td>Infrastructure</td>
                                <td><Link to="/">View More</Link></td>
                            </tr>
                            <tr>
                                <td>Chromia</td>
                                <td>Early Stage Token</td>
                                <td>Infrastructure</td>
                                <td><Link to="/">View More</Link></td>
                            </tr>
                            <tr>
                                <td>Credits</td>
                                <td>Early Stage Token</td>
                                <td>Infrastructure</td>
                                <td><Link to="/">View More</Link></td>
                            </tr>
                            <tr>
                                <td>APPC</td>
                                <td>Early Stage Token</td>
                                <td>Finance</td>
                                <td><Link to="/">View More</Link></td>
                            </tr>
                            <tr>
                                <td>ArcBlock</td>
                                <td>Early Stage Token</td>
                                <td>Infrastructure</td>
                                <td><Link to="/">View More</Link></td>
                            </tr>
                            <tr>
                                <td>TruBit</td>
                                <td>Early Stage Token</td>
                                <td>Infrastructure</td>
                                <td><Link to="/">View More</Link></td>
                            </tr>
                            <tr>
                                <td>AMPLEFORTH</td>
                                <td>Early Stage Token</td>
                                <td>Infrastructure</td>
                                <td><Link to="/">View More</Link></td>
                            </tr>
                            <tr>
                                <td>Venus</td>
                                <td>Early Stage Token</td>
                                <td>DeFi</td>
                                <td><Link to="/">View More</Link></td>
                            </tr>
                            <tr>
                                <td>Swipe</td>
                                <td>Early Stage Token</td>
                                <td>DeFi</td>
                                <td><Link to="/">View More</Link></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </Container>
        </Layout>
    );
};

export default Portfolio;