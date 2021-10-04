import React from 'react';
import { Card } from 'react-bootstrap';
import image from '../../../image/img.jpg'
import './HomeHeader.css'


const HomeHeader = () => {
    return (
        <div>
            <Card className="mt-3">
                <Card.Img className='header-img' src={image} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title className='text-black'><h1>Online Teaching And Carrier Track Program</h1></Card.Title>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default HomeHeader;