import React from 'react';
import Header from './Header';
import Footer from './Footer';
import VideoUrl1440 from '../assets/web_backgroundVideo_1440.mp4';
import VideoUrl1920 from '../assets/web_backgroundVideo_1920.mp4';

function Layout(props) {
    return (
        <div id="wrapper">
            <video className="background-video show-for-xxlarge" autoPlay loop muted playsInline>
                <source src={VideoUrl1920} type="video/mp4" />
            </video>
            <video className="background-video hide-for-xxlarge" autoPlay loop muted playsInline>
                <source src={VideoUrl1440} type="video/mp4" /> 
            </video>
            <Header />
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout;