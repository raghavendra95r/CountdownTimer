

import React from "react";
import './display.css';
import Tilt from 'react-tilt';


const Timer = ({days, hours,minutes,seconds}) => {
    return(
        <Tilt className="Tilt" options={{ max : 10 }}  >
            <div className="fa timer shadow-5 rounded-2 Tilt-inner">
                 <span>{days} Days : {hours} Hours : {minutes} Minutes : {seconds} Seconds </span>
             </div>
                                    {/* <div className="Tilt-inner"> 👽 </div> */}
        </Tilt>
       
    );
}
// 
export default Timer;