import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';
import './Service.css'

const Service = () => {
    const [courses, setcourses] = useState([]);
    useEffect(()=>{
        fetch('./course.JSON')
        .then(res=>res.json())
        .then(data=>setcourses(data))
    },[])
    return (
        <div>
         <div className="container">
         <Row xs={1} md={3} className="g-4">
                {
                    courses.map(course => <Course course={course} key={course.courseId}></Course>)
                }
            </Row>
         </div>
        </div>
    );
};

export default Service;