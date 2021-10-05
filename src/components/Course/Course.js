import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Course.css'

const Course = (props) => {
    const {title,img,Instructor,CourseFee,courseId,duration}=props.course
    return (
        <Col>
          <Card>
            <Card.Img className='img' variant="top" src={img} />
            <Card.Body>
              <Card.Title>Course Name : {title}</Card.Title>
              <Card.Text>
                <h5>Instructor: {Instructor}</h5>
                <h5>Course Fee: {CourseFee}</h5>
                <h5>Duration: {duration}</h5>
                <Link to={`/course/${courseId}`}><button>Course Details</button></Link>
              </Card.Text>
            </Card.Body>
          </Card>
    </Col>
    );
};

export default Course;