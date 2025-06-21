
import { motion ,AnimatePresence, easeInOut} from 'framer-motion';
import { useState } from 'react';
import React from 'react';
import { ThemeProvider } from '../../my-project/src/theme/Themebtn';
import pic1 from '../images/testimonial/headshot.jpg';
import kidus from '../images/testimonial/kidus.jpg'
import leul from '../images/testimonial/leul.jpg'
import surafel from '../images/testimonial/surafel.jpg'
const My_testimonial = () => {

    

   const  testimonials= [
      {
        img:leul,
        content_text:"abel is great at team work definitely has a bright future ahead of in the field of programming and coding ",
        testimonial_name:"leul eyasu",
        testimonial_worker: "group member",
      },
      {
        img:kidus,
        content_text:"verstaile at many programming languagues abel would be  a very good asset to any group or organization that would employ his skills",
        testimonial_name:"Kidus gebremichael",
        testimonial_worker: "fellow IS student",
      },
      {
        img:surafel,
        content_text:"has good leadership skills and a remarkable adaptabily abel is certainly one of the best group leaders i have ever had ",
        testimonial_name:"surafel habtewold",
        testimonial_worker: "group member",
      },
      {
        img:pic1,
        content_text:" Abel is a very hard working student that strives to be better everyday we all can learn so mmuch from him",
        testimonial_name:"kidus Admasu",
        testimonial_worker: "fellow IS student",
      },
    
    ]
    
  
    const[current,setcurrent] = useState(0);
    const [direction,setdirectoin] = useState(0);
    const length = testimonials.length;
    const prev =()=>{
      setdirectoin(-1)
      setcurrent( current === 0 ? length - 1 : current - 1);
    }
    const next =()=>{
      setdirectoin(1);
      setcurrent( current === length - 1 ? 0 : current + 1);
    }
    const variant={
      initial: (direction)=>{
        return{opacity: 0, x : direction > 0 ? 200:-200,
    
        }},
      animate:{x:0, opacity:1,},
      exit: (direction)=>{return{x: direction > 0 ? -200 : 200,opacity:0}}
    }
  return (
    <ThemeProvider>
      <div className="dark:bg-blacki dark:text-white bg-gray-200 flex justify-center items-center my-auto">
  {
    testimonials.map((item,index)=>index === current && <AnimatePresence  custom={direction} ><motion.div key={item.testimonial_name} transition={{ease:easeInOut }} variants={variant} initial="initial" animate="animate" exit="exit" custom={direction}>
    <div className='flex  justify-center items-center'>
      <img  src={item.img} alt="" className='rounded-full' />
    </div>
    <div className='flex flex-col justify-center items-center'>
      <span className='font-bold'>{item.testimonial_name}</span>
      
      <span className='text-xl font-sans md:font-semibold '>{item.content_text}</span>
    </div>
    <div className="flex gap-4 justify-between">
    <button onClick={prev} className="px-2 py-1 rounded-full bg-gray-600 ">&#x3c;</button>
    <button onClick={next} className="px-2 py-1 rounded-full  bg-gray-600 ">&#x3e;</button>
    </div>
   
    </motion.div>
    </AnimatePresence>)
  }
</div>  

    </ThemeProvider>
  );
};

export default My_testimonial;
