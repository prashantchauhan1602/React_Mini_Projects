import React from "react";
import Card from "./Card";
import {useState} from "react"

const Cards = (props) =>{
    let courses = props.courses ;
    let category = props.category ;

    const[likedCourses , setLikedCourses] = useState([]) ;

    function getCourses(){
        if(category === "All")
        {
            let allCourse = [];
            Object.values(courses).forEach( array =>{
                array.forEach((courseData) =>{
                    allCourse.push(courseData);
                })
        })
        return allCourse ;
        }
        else{
            return courses[category] ;
        }
    }

    return(
       <div className="flex flex-wrap mx-auto justify-center mx-3">
        {
            getCourses().map( (course) =>
                <Card key={course.id}
                course={course}
                likedCourses={likedCourses}
                setLikedCourses={setLikedCourses}> </Card>
            )
        }
       </div>
    )
}
export default Cards 