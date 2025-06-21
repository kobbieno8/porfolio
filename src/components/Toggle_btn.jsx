import useTheme from "../../my-project/src/theme/Themebtn"
import { useState } from "react";
import classNames from 'classnames'

const Toggle_btn = () => {
    const {themeMode,darkTheme,lightTheme} = useTheme();
const[select,setselect] = useState(true);
var theme;
  return (
<div onClick={()=>{ if(themeMode == 'light'){
        darkTheme();
        theme =false;
  
      }else{
        lightTheme();
        theme =true;
    
      } setselect(!select)}} className={classNames(" md:w-20 md:h-50  bg-gray-300  rounded-full",{"bg-grey-100":select})}>
<div  className={classNames("md:h-10 md:w-10  bg-slate-500 rounded-full",{"ml-10 bg-white":select})}>
  </div>
</div>
  
  )
}

export default Toggle_btn