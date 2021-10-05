import React from 'react';
import { Card } from 'react-bootstrap';
import image from '../../../image/img.jpg'
import './HomeHeader.css'


const HomeHeader = () => {
    return (
            <Card >
                <Card.Img className='header-img' src={image} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title className='text-black'>
                        <h1>Online Teaching And Carrier Track Program
                        </h1>
                        <h3>Largest Collection of Online Courses
                        Be your best self by learning from here</h3>
                    </Card.Title>
                </Card.ImgOverlay>
            </Card>
    );
};

export default HomeHeader;