import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CourseDemo.css'

const CourseDemo = (props) => {
    const {title,img,Instructor,CourseFee,id,duration}=props.course
    return (
        <div>
            <Col>
      <Card>
        <Card.Img className='img-demo' variant="top" src={img} />
        <Card.Body>
          <Card.Title>Course Name : {title}</Card.Title>
          <Card.Text>
            <h5>Instructor: {Instructor}</h5>
            <h5>Course Fee: {CourseFee}</h5>
            <h5>Duration: {duration}</h5>
            <Link to={`/course/${id}`}><button>Course Details</button></Link>


          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default CourseDemo;