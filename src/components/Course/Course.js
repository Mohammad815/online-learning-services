import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './Course.css'

const Course = (props) => {
    const {title,img,Instructor,CourseFee}=props.course
    return (
        <Col>
      <Card>
        <Card.Img className='img' variant="top" src={img} />
        <Card.Body>
          <Card.Title>Course Name : {title}</Card.Title>
          <Card.Text>
            <h3>Instructor: {Instructor}</h3>
            <h3>Course Fee: {CourseFee}</h3>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default Course;