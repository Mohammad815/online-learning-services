import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {Row} from 'react-bootstrap';
import CourseDemo from '../CorseDemo/CourseDemo';
import HomeHeader from './HomeHeader/HomeHeader';

const Home = () => {
    const [courseDemo,setCourseDemo]=useState([]);

    useEffect(()=>{
        fetch('./course.JSON')
        .then(res=>res.json())
        .then(data=>setCourseDemo(data))
    },[])
    const courses = courseDemo.slice(0,4)
    return (
        <div>
          
             <HomeHeader></HomeHeader>
            <div className="container mt-3">
            <Row xs={1} md={2} className="g-4">
            
                {
                    courses.map(course=><CourseDemo course={course} unique={course.courseId} ></CourseDemo>)
                }
            </Row>
         </div>
        </div>
    );
};

export default Home;