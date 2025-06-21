import { ThemeProvider } from "../../my-project/src/theme/Themebtn"
import useTheme from "../../my-project/src/theme/Themebtn"
 import github from '../images/github.png'
import linkden from '../images/linkden.png'
import twitter from '../images/twitter.png'
import github2 from '../images/darkmode/git.png'
import { CiTwitter } from "react-icons/ci";
import { useState } from "react";
import { FaGithub } from "react-icons/fa"
import twit from "../images/darkmode/twitter .png"

const Footer = () => {
  const {themeMode,darkTheme,lightTheme} = useTheme();
  
  console.log(themeMode);
  return (
    <ThemeProvider >
      
    <div className="dark:bg-blacki  flex flex-row justify-center ">
      <div className="">
        <span className="text-darkGrayishBlue block text-center m-10">copyright &copy; Abel Gulbet all rights reserved</span>
        </div>
        <div className="   flex flex-row space-x-3 mt-10">
        <a href="https://github.com/" className=" dark:text-white h-5"><img src={github} alt="" /></a>
           <a href="https://linkedin.com/" ><img src={twit} alt="" /></a>
           <a href="https://x.com/AGulbet23174"> <img src={twitter} alt="" /></a>
           
           </div>
    </div>
    </ThemeProvider>
  )
}

export default Footer