import checkmark from '../images/checkmark/checkmark.png'
import CountUp from 'react-countup'
import { delay, motion, useAnimate, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ThemeProvider } from '../../my-project/src/theme/Themebtn'
const AboutMe = () => {
  const ref = useRef();
  const inview  = useInView(ref,{once: true})
  const mainControls = useAnimation();
  useEffect (()=>{
    if(inview){
    mainControls.start("animate");
   
    }
  },[inview]) 

  const var1={
    hidden:{opacity:0, x:-100},
    animate:{opacity:1, x:1},
  }
  const var2={
    hidden:{opacity:0, x:100},
    animate:{opacity:1, x:1},
  }
  return (
<ThemeProvider>
    <section id="abtme " className='dark:bg-blacki bg-gray-200 pb-10 '>
    <div  className="mx-16 flex flex-col w-auto justify-center md:flex-row md:justify-between pt-16 px-6  pb-10  space-y-7   md:space-y-0  dark:text-black">
  <div className=" flex space-x-2 bg-black p-2 rounded-full text-white dark:text-black dark:bg-white "><p className="text-5xl font-bold "><CountUp end={4} duration={5} delay={2} enableScrollSpy={true}  scrollSpyOnce={true} /></p> <div className="mt-3"> projects completed</div></div>
  <div className=" flex space-x-2 bg-black p-2 rounded-full  text-white dark:text-black dark:bg-white"><p className="text-5xl font-bold "><CountUp end={3} duration={5} delay={2} enableScrollSpy={true}  scrollSpyOnce={true} /></p> <div className="mt-3"> years of experiance</div></div>
  <div className=" flex space-x-2 bg-black p-2 rounded-full  text-white dark:text-black dark:bg-white"><p className="text-5xl font-bold "><CountUp end={8} duration={5} delay={2} enableScrollSpy={true}  scrollSpyOnce={true} /></p> <div className="mt-3"> apps mastered</div></div>
  <div className=" flex space-x-2 bg-black p-2 rounded-full  text-white dark:text-black dark:bg-white"><p className="text-5xl font-bold "><CountUp end={4} duration={5} delay={2} enableScrollSpy={true}  scrollSpyOnce={true} /></p> <div className="mt-3"> languages proficent</div></div>
    </div>
    
  <div  className="mx-16 flex flex-col md:flex-row justify-center shadow-lg border-white  md:space-y-0  space-x-5 mt-10 sm:flex-col md:space-x-3 sm:space-x-0 sm:space-y-3">
    
     <motion.div variants={var1} ref={ref} initial="hidden" animate={mainControls} transition={{delay:0.5,duration:0.5}} className="bg-gray-100 lg:min-w-[100vh]  sm:min-auto flex-col flex p-5 space-y-5">
      <span className="text-2xl ">Front end development</span>
     <article>
      <div className="flex flex-row space-x-3">
        <div><img src={checkmark} alt="checkmark" /></div>
        <div> <span className='font-bold'>html</span>

   <div className="w-40 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
   <div className="bg-blue-600 h-2.5 rounded-full text-center  " style={{width: "80%"}}></div>
   </div>
        </div>
      </div>
      <div className="flex flex-row space-x-3">
        <div><img src={checkmark} alt="checkmark" /></div>
        <div> <span className='font-bold'>css</span>
        <div className="w-40 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
     <div className="bg-blue-600 h-2.5 rounded-full text-center  " style={{width: "70%"}}></div>
    </div>
        </div>
      </div>
      <div className="flex flex-row space-x-3">
        <div><img src={checkmark} alt="checkmark" /></div>
        <div> <span className='font-bold'>javascrypt</span>
        <div className="w-40 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
       <div className="bg-blue-600 h-2.5 rounded-full text-center  " style={{width: "50%"}}></div>
   </div>
        </div>
      </div>
  
     </article>
     </motion.div>
     <div>
     <motion.div variants={var2} ref={ref} initial="hidden" animate={mainControls} transition={{delay:0.5,duration:0.5}} className="bg-gray-100 shadow-lg border-white flex lg:min-w-[104vh] sm:w-auto flex-col p-5 space-y-5  ">
    <span className="text-2xl  flex-row "> back end development</span>
    <article className='grid md:grid-rows-3  grid-rows-3 grid-flow-col sm:grid-rows-4'>
      <div className="flex flex-row space-x-3">
        <div><img src={checkmark} alt="checkmark" /></div>
        <div> <span className='font-bold'>c++</span>
        <div className="w-40 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
    <div className="bg-blue-600 h-2.5 rounded-full text-center  " style={{width: "65%"}}></div>
   </div>
        </div>
      </div>
      <div className="flex flex-row space-x-3">
        <div><img src={checkmark} alt="checkmark" /></div>
        <div> <span className='font-bold'>java</span>
        <div className="w-40 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
    <div className="bg-blue-600 h-2.5 rounded-full text-center  " style={{width: "65%"}}></div>
</div>
        </div>
      </div>
      <div className="flex flex-row space-x-3">
        <div><img src={checkmark} alt="checkmark" /></div>
        <div> <span className='font-bold'>c#</span>
        <div className="w-40 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
  <div className="bg-blue-600 h-2.5 rounded-full text-center  " style={{width: "40%"}}></div>
</div>
        </div>
      </div>
      <div className="flex flex-row space-x-3">
        <div><img src={checkmark} alt="checkmark" /></div>
        <div> <span className='font-bold'>sql</span>
        <div className="w-40 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
  <div className="bg-blue-600 h-2.5 rounded-full text-center  " style={{width: "90%"}}></div>
</div>
        </div>
      </div>
     
   
     </article>
     </motion.div>
    </div>
    </div>
    </section>
    </ThemeProvider>
  )
}

export default AboutMe