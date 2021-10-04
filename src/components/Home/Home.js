import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Row} from 'react-bootstrap';
import CourseDemo from '../CorseDemo/CourseDemo';
import HomeHeader from './HomeHeader/HomeHeader';

const Home = () => {
    const [courseDemo,setCourseDemo]=useState([]);

    useEffect(()=>{
        fetch('./course.JSON')
        .then(res=>res.json())
        .then(data=>setCourseDemo(data))
    },[])
    console.log(courseDemo)
    const courses = courseDemo.slice(0,4)
    console.log(courses)
    return (
        <div>
          
             <HomeHeader></HomeHeader>
            <div className="container mt-3">
         <Row xs={1} md={2} className="g-4">
            
                {
                    courses.map(course=><CourseDemo course={course}></CourseDemo>)
                }
            </Row>
         </div>
        </div>
    );
};

export default Home;