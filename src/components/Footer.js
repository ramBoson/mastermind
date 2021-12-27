import React from 'react';
import {Container} from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";


function Footer() {
    return (
        <div className="footer text-center">
            <Container>
                <div className="footer-logo mb-4">
                    <Link to="/">MasterMind</Link>
                </div>

                <div className="mb-5">
                    <Link to="/" target={"_blank"} className='btn btn-round btn-round-lg'><svg width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17"><path d="M4.306 1.88c0 .994-.8 1.8-1.786 1.8a1.793 1.793 0 01-1.786-1.8c0-.994.8-1.8 1.786-1.8s1.786.806 1.786 1.8zm.014 3.24H.72v11.52h3.6V5.12zm5.746 0H6.487v11.52h3.579v-6.048c0-3.362 4.341-3.636 4.341 0v6.048H18V9.346c0-5.673-6.422-5.464-7.934-2.67V5.12z" fill="#fff"></path></svg></Link>
                </div>

                <ul className='list-unstyled d-flex mb-5 align-items-center justify-content-center'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/invest">INVEST</Link></li>
                    <li><Link to="/portfolio">PORTFOLIO</Link></li>
                    <li><Link to="/contact-us">CONTACT US</Link></li>
                </ul>

                <p>&copy; {new Date().getFullYear()} MasterMind Ventures . All rights reserved.</p>
            </Container>
        </div>
    );
}

export default Footer;