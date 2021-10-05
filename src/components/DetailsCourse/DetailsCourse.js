import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';



const DetailsCourse = () => {
    const {id} = useParams();
    const [courseDetails, setCourseDetails]= useState([])
    const [singleCourse, setSingleCourse] =useState({})
    useEffect(()=>{
        fetch('/courseDetails.JSON')
        .then(res=>res.json())
        .then(data=>setCourseDetails(data))
    },[])
    useEffect(()=>{
        const foundCourse = courseDetails.find(courseDetails=>courseDetails.courseId === id)
        setSingleCourse(foundCourse)
    },[courseDetails])
    return (
        <div>
            <h3>Course Name : {singleCourse?.title}</h3>
            <h5>Instructor Name  : {singleCourse?.Instructor}</h5>
            <h5>Course Fee : {singleCourse?.CourseFee}</h5>
            <h5>Duration : {singleCourse?.duration}</h5>
            <h5>Language : {singleCourse?.language}</h5>
        </div>
    );
};

export default DetailsCourse;