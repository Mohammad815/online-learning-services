import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
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
            <div className="conatainer">
                {
                    courses.map(course => <Course course={course}></Course>)
                }
            </div>
        </div>
    );
};

export default Service;