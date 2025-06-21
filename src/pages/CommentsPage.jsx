import { div } from "framer-motion/client";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const CommentsPage = () => {
    const [comments, setcomments]= useState([]);
    useEffect (()=>{
    const fetch_info =  async () => {
const res = await fetch('http://localhost:8000/comments');
const data = await res.json();
setcomments(data);
    }
    fetch_info();
    
},[])
console.log(comments);
  return (
    <div className=" grid grid-cols-2">
        
    {comments.map((com)=>(
        
    
        <div className="border-2 m-3">
        <div >

            <div  >{com.name}</div>
            <div>{com.email}</div>
            <div>{com.comment}</div>
            </div>
        </div>
        
        ))}
    </div>
  )
}

export default CommentsPage