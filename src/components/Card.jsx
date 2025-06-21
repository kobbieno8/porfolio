import { delay, motion, useAnimate, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import commentsdata from '../comments.json'

import { ThemeProvider } from '../../my-project/src/theme/Themebtn';
import { FaGithub, FaThumbsUp } from 'react-icons/fa';  
import { Link } from 'react-router-dom';

const Card = (  ) => {
    const ref = useRef();
  const inview  = useInView(ref,{once: true})
  const mainControls = useAnimation();
  useEffect (()=>{
    if(inview){
    mainControls.start("show");
   
    }
  },[inview]) 
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetch_info =  () => {
            setComments(commentsdata.comments);
           
        };
        fetch_info();
    }, []);

    let arr = ["/cards/The_food_vendor.jpg", "/cards/The_project.jpg", "/cards/database.webp"];
    let arr_link = ["https://github.com/kobbieno8/my_food_management", "https://github.com/kobbieno8/my_jave_project_management_teacher_and_student", "https://github.com/kobbieno8/my_database_project_with_documentation"];

  

   
    return (
        
        <ThemeProvider>
            <motion.div
            
                variants={{
                    hidden: { opacity: 0 },
                    show: {
                        opacity: 1,
                        transition: {
                            delay: 0.2,
                            staggerChildren: 0.25,
                            when: "beforeChildren",
                        },
                    },
                }}
                ref = {ref}
                initial="hidden"
                animate={mainControls}
                className="flex flex-wrap gap-24 dark:bg-blacki justify-center space-x-9 p-5 bg-gray-200 "
            >
                {comments.map((com, index) => (
                    <motion.div
                        key={com.id}
                        variants={{ hidden: { opacity: 0, y: -100 }, show: { opacity: 1, y: 0 } }}
                        className="rounded-lg md: overflow-hidden shadow-md flex flex-col border-2 sm:w-52 md:w-60 lg:w-72 p-5 bg-white "
                    >
                        <div className="group relative">
                            <div className="overlay absolute top-0 left-0 w-full md:h-full bg-slate-900 bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 items-center justify-center">
                                <div className="flex items-center justify-center h-12 w-12 border-2 rounded-full text-white m-10">
                                    <a href={arr_link[index]}>
                                        <FaGithub />
                                    </a>
                                </div>
                            </div>
                            <img className='w-60 h-52' src={arr[index]} alt="img" />
                        </div>
                        <span className='font-bold text-pretty '>{com.title}</span>
                        <br />
                        <span className='font-sans'>{com.short}</span>
                        <br />
                        <div className='flex justify-between'>
                        <div className="">
                            <Link
                                to={`/job/${com.id}`}
                                className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                            >
                                read more
                            </Link>
                        </div>
                         
                       
                        <div className="flex items-center justify-between">
                            <button
                               
                                className="flex items-center space-x-2 text-indigo-500 hover:text-indigo-700"
                            >
                                <FaThumbsUp />
                               
                            </button>
                        </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </ThemeProvider>
    );
};

export default Card;
