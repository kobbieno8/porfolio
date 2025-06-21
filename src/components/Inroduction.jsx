import pic from '../images/pic.jpg'
import github from '../images/github.png'
import linkden from '../images/linkden.png'
import twitter from '../images/twitter.png'
import cv from '../textdoc/cv.txt'
import { ThemeProvider } from "../../my-project/src/theme/Themebtn";
import {motion,useInView,useAnimation} from 'framer-motion'
import { useEffect, useRef, useState } from 'react';

const Inroduction = () => {
  const ref = useRef();
  const inview  = useInView(ref,{once: true})
  const mainControls = useAnimation();
  useEffect (()=>{
    if(inview){
    mainControls.start("show");
   
    }
  },[inview]) 
  
  return (
  
<ThemeProvider >

    <div className=' flex dark:text-white dark:bg-blacki flex-col-reverse md:flex-row justify-around pt-20 bg-gray-200 px-6  mx-auto 
    md:space-y-0 '>
    <motion.div  variants={{hidden: { opacity: 0 },
                    show: {
                        opacity: 1,
                        transition: {
                            delay: 0.2,
                            staggerChildren: 0.25,
                            
                        },
                      }
                    }
  } initial="hidden" animate={mainControls} ref={ref}
    className='flex flex-col mb-32 space-y-12 md:w-1/2 '
    ><h1   className="max-w-md text-4xl font-bold text center md:text-5xl md:text-left">
      Hello, My name is Abel
    </h1>
    <div   variants={{ hidden: { opacity: 0, x:-200 }, show: { opacity: 1,x:0 } }}>
    <p className="max-w-sm text-center text-slate-700 md:text-left">
      I am a third year information system student that is profcieient in various progamming languages 
    </p>
    </div>
    <div   variants={{ hidden: { opacity: 0, x:-200 }, show: { opacity: 1,x:0 } }} className='flex col space-x-10 '>
      <button  className="p-2 px-5 bg-black rounded-full dark:bg-white dark:text-black text-white"onClick={()=>{ 
        let elem = window.document.getElementById("down");
        elem.click();
      }} >download cv</button>
   <a href={cv} id='down' download hidden>fs</a>
   <div   variants={{ hidden: { opacity: 0, x: 100 }, show: { opacity: 1, x: 0 } }} className=' flex col space-x-6'>
   <a href="https://github.com/"><img src={github} /></a>
   <a href="https://linkedin.com/"><img src={linkden}/></a>
   <a href="https://x.com/AGulbet23174"><img src={twitter}/></a>


   </div>
    </div>
    </motion.div>
    <div classname="rounded-lg"><img src={pic} className='rounded-full'  alt="mypic" /></div>
  
    </div>
    
    </ThemeProvider>
  )
}

export default Inroduction