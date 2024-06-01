import './Timer.css'
import React, { useState  , useEffect} from "react"

function Timer() {

    const [second, setSecond] = useState(0)
    const [min, setMin] = useState(0)
    const [hour, setHour] = useState(0)


    useEffect(()=>{
      setTimeout(() => {
        if (((second+1)/60) === 1){
            setSecond((second) => 0)
            if(((min+1)/60) === 1){
                setHour((hour) => hour+1)
                setMin((min) => min+1)
            }
            else
                setMin((min) => min+1)
            }
        else
            setSecond((second) => second + 1)
      } , 1000)  
    });

    const makeStringNum = (num) => {
        return num.toString().padStart(2, '0');
    };

    return (
        <div className='timer'>
            <div className='timer-clock'>{makeStringNum(hour)}</div>
            <label>:</label>
            <div className='timer-clock'>{makeStringNum(min)}</div>
            <label>:</label>
            <div className='timer-clock'>{makeStringNum(second)}</div>
        </div>

    )
}

export default Timer