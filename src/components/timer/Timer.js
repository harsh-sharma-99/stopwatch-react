import React from 'react'
import { useState, useEffect, useRef } from 'react';
import "./styles.scss";
const Timer = () => {
    const root = "timer";
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [start, setStart] = useState(false)

    useEffect (() => {
        if(!start) return;
        if(!minutes && !seconds) return;  
        const timer = setInterval(() => {
        console.log("=======run",seconds,minutes)
        if(minutes!==0 && seconds===1){
            setMinutes(minutes-1);
           return setSeconds(59);
        }

                setSeconds(seconds - 1)
        }, 1000);
            
        
            return () => clearInterval(timer);
        
    }, [start, seconds])

    const handleChangeMinutes = (e) => {
        setMinutes(e.target.value)
    }

    const handleChangeSeconds = (e) => {
        setSeconds(e.target.value)
    }

    const handleStartTimer = () => {
        setStart(prev => !prev);
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
               <button onClick = {handleStartTimer} className = { `${root}-controls--button`}>Start</button>
               {/* <button onClick = {handlePlayPause}  className = { `${root}-controls--button`}>Play/Pause</button>
               <button  onClick = {handleStartTimer} className = { `${root}-controls--button`}>Reset</button> */}
            </div>
       </div>

        <div className = { `${root}-counter`}>
           {minutes}:{seconds}
        </div>
    </div>
  )
}

export default Timer