import { delay, motion, useAnimate, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ThemeProvider } from '../../my-project/src/theme/Themebtn';

const MyRepositary = () => {
    const ref = useRef();
    const inview  = useInView(ref,{once: true})
    const mainControls = useAnimation();
    useEffect (()=>{
      if(inview){
      mainControls.start("show");
     
      }
    },[inview]) 
    const[repos ,setrepos] = useState([])
    useEffect(() => {
    
        const fetchRepos = async () => {
          const res = await fetch("https://api.github.com/users/kobbieno8/repos");
          const data = await res.json();
          setrepos(data);
          console.log(data);
          
        };
        fetchRepos();
      }, []);
      
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
        className="flex gap-24 dark:bg-blacki justify-center flex-wrap space-x-9 p-5 bg-gray-200 "
    >                

        {repos.map((rep) => (
            <motion.div
                key={rep.id}
                variants={{ hidden: { opacity: 0, y: 100 }, show: { opacity: 1, y: 0 } }} transition={{delay:1,duration:1}}
                className="rounded-lg overflow-hidden shadow-md flex flex-col border-2 w-72 p-5 bg-white gap-6 sm:w-52 md:w-60 lg:w-72
                 ">
                <div className='font-bold text-wrap border-2 bg-gray-100 rounded-lg'>{rep.name}</div>
                <div> <p className='font-sans text-wrap border-2 bg-gray-100 rounded-lg'>{rep.description}</p></div>
            <div className='flex flex-row gap-3 '><span className='font-semibold'>rep id:</span><p className='font-sans text-wrap border-2 bg-gray-100 rounded-lg w-fit'>{rep.id}</p></div>
          
              
            </motion.div>
        ))}
    </motion.div>
</ThemeProvider>
  )
}

export default MyRepositary