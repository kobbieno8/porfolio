import { NavLink,Link } from "react-router-dom";
import { ThemeProvider } from "../../my-project/src/theme/Themebtn";
import { delay, motion } from "framer-motion";
import { useEffect, useState } from "react"
import Toggle_btn from "./Toggle_btn";
const Navbar = () => {
  const [themeMode,setThememode]= useState('light');
  
  const darkTheme =()=>{
setThememode('dark')
console.log(themeMode);
  }
  
  const lightTheme =()=>{
setThememode('light')
  }
  useEffect(()=>{
document.querySelector('html').classList.remove('light','dark');
document.querySelector('html').classList.add(themeMode);
},[themeMode])
    const is_Act = ('hover:text-darkGrayishBlue  text-black dark:text-gray-200');
    const var1={
      hidden:{opacity:1,x:400},
      visible:{opacity:1, x:1,transiton:{
        delay:2
      },
      
      },
    }
    const var2={
      hidden:{opacity:1,x:-200},
      visible:{opacity:1, x:1
      
      },
      
    }
  return (
    <ThemeProvider value={{ themeMode,darkTheme,lightTheme}}>
    <nav className=" space-x-2 m-auto p-6 bg-gray-200  dark:bg-blacki dark:text-gray-400">
      <div className="flex items-center sm:justify-between md:justify-between ">
      <motion.div transition={{delay:0.5, duration:1}}  variants={var1} initial="hidden" animate="visible" class="ml-16 text-4xl"> <Link to="/">Abel.</Link></motion.div>
      <motion.div  transition={{delay:0.5, duration:1}}  variants={var2} initial="hidden" animate="visible" className=" md:flex space-x-8 md:align-baseline md:mr-24">
      <Toggle_btn/>
      
      <Link to="/MyProjects" className={is_Act}>previous work</Link> 
      
      <Link to="/Contactme" className={is_Act}>contact me</Link> 
 
        </motion.div>
      </div>
   </nav>
   </ThemeProvider>
  )
}

export default Navbar