import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Course = (props) => {
    const {title,img,Instructor,CourseFee}=props.course
    return (
        <div className="border">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>Course Name : {title}</Card.Title>
                <h3>Course Instructor Name: {Instructor}</h3>
                <Button variant="primary">Details</Button>
            </Card.Body>
            </Card>
        </div>
    );
};

export default Course;