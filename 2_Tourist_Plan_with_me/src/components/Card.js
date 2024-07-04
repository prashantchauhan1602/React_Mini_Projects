import React from "react";
import {FcLike , FcLikePlaceholder } from "react-icons/fc";
import {toast} from "react-toastify";

const Card = (props) =>{
    let course = props.course ;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;
    // console.log(likedCourses);

    function clickHandler()
    {
        if(likedCourses.includes(course.id))
        {
            setLikedCourses((prev)=> prev.filter((cid)=> (cid !== course.id)));
            toast.warning("Like removed");
        }
        else{
            if(likedCourses.length === 0)
            {
                setLikedCourses([course.id]);
            }
            else{
                setLikedCourses( (prev) => [...prev, course.id]);

            }
            toast.success("Liked successfully");
        }
    }

    return(
        <div className="w-[300px] bg-bgDark rounded-md overflow-hidden mx-3 my-3">
            <div className="relative">
                <img src={course.image.url} ></img>

                <div className="w-[40px] h-[40px] bg-white absolute right-2 bottom-3 rounded-full 
                grid place-items-center">
                <button onClick={clickHandler}>
                    {/* <FcLike fontSize={"1.75rem"}></FcLike> */}
                    {
                        !likedCourses.includes(course.id) ? 
                        <FcLikePlaceholder fontSize="1.75rem"></FcLikePlaceholder> : 
                        <FcLike fontSize="1.75rem"></FcLike>
                    }
                </button>
            </div>
            </div>
            
            <div className="p-4 " >
                <p className=" text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="mt-2 text-white ">
                    {
                        course.description.length > 100 ? (course.description.substr(0,100)) + "...." : (course.description)
                    }
                </p>
            </div>
        </div>
    )
}
export default Card 