import React, { useState,useEffect } from "react";
import './header-tips.style.scss'



const HeaderTips = (props) => {
    
    const [fader, setfader] = useState({fade:'fade-out'});
    const l = props.array.length;  
    var [i, seti] =  useState(l-1);

    useEffect(() => {
        const timeout = setInterval(() => {
           if (fader.fade === 'fade-in') {
              setfader({
                   fade: 'fade-out'
              })
              
           } else {
                setfader({
                   fade: 'fade-in'
                })
                seti((i+1)%l) 
           }
        }, 3000);
        return () => clearInterval(timeout)
   }, [fader])
   

    return(
        <div className="fader">
            <div className={fader.fade}>
                {props.array[i]}
            </div>
        </div>
    )
};

export default HeaderTips;