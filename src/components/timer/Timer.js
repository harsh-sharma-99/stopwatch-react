import React from 'react'
import { useState, useEffect, useRef } from 'react';
import "./styles.scss";
const Timer = () => {
    const root = "timer";
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [start, setStart] = useState(false)
    const timer = useRef(null);

    useEffect (() => {
        if(!start) return;
        if( minutes <=0 && seconds <=0) return;  

        timer.current = setInterval(() => {

        if(minutes!==0 && seconds===1){
            setMinutes(m => m-1);
           return setSeconds(59);
        }
                setSeconds(seconds - 1)
        }, 1000);

            return () => {
                clearInterval(timer.current)
            };
        
    }, [start, seconds])

    const handleChangeMinutes = (e) => {
        setMinutes(e.target.value)
    }

    const handleChangeSeconds = (e) => {
        setSeconds(e.target.value)
    }


    const handlePlayPause = () => {
        if( minutes <=0 && seconds <=0) return;  

        setStart(prev => !prev);
        if(timer.current){
          clearInterval(timer.current);
        }
  
      }

    const handleResetTimer = () => {
      setStart(false);
      if(timer.current){
        clearInterval(timer.current);
      }

      setMinutes(0);
      setSeconds(0);

    }

    const renderval = (val) => {
        if(!val) return "00";

        return (val < 10) ? ("0" + val) : val;
    
    }
    
  return (
    <div className ={ `${root}-container`}>
       <h1>Timer</h1> 
       <div className = { `${root}-controls`}>
            <div className = { `${root}-controls--inputs`}>
                <span>Minutes : </span>
                <input type="number" value={minutes} onChange = {handleChangeMinutes} />
            
                <span>Seconds : </span>
                <input type="number" value={seconds} onChange = {handleChangeSeconds}/>
            </div>
            <div className = { `${root}-controls--buttons`}>
               <button onClick = {handlePlayPause}  className = { `${root}-controls--button`}>Play/Pause</button>
               <button  onClick = {handleResetTimer} className = { `${root}-controls--button`}>Reset</button>
            </div>
       </div>

        <div className = { `${root}-counter`}>
           {renderval(minutes)} : {renderval(seconds)}
        </div>
    </div>
  )
}

export default Timer