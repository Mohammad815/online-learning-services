import React from 'react';
import './Footer.css'

const Footer = () => {
    return (

        <div className="container-fluid mt-5 bg-dark">
        <div className='blog'>
            
            <div>
                <ul>
                    <li><h3>About</h3></li>
                    <li>Contact</li>
                    <li>Service</li>
                    
                </ul>
            </div>
            <div>
                <ul>
                    <h3>Service</h3>
                    <li>Events</li>
                    <li>News</li>
                </ul>
            </div>
            <div>
                <ul>
                    <h3>Buy</h3>
                    <li>Where to Buy</li>
                    <li>Enroll</li>
                </ul>
            </div>
            <div>
                <ul>
                    <h3>Help</h3>
                    <li>Faq</li>
                    <li>Reliort</li>
                </ul>
            </div>
            </div>
        </div>
    );
};

export default Footer;