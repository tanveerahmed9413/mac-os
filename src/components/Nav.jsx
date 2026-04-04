import React, { useEffect, useEffectEvent, useState } from 'react'
import apple from "../assets/apple.svg"
import wifi from "../assets/wifi.svg"

const Nav = () => {
    const [time, settime] = useState(new Date())

     useEffect(()=>{
        let interval  = setInterval(() => {
            settime(new Date())
        }, 1000);

        return ()=> clearInterval(interval)
     },[])
  return (
    <div>
      <nav className='flex justify-between px-2 items-center gap-2.5 font-semibold   bg-gray-400'>
        <div className="left flex gap-2.5 items-center   py-2 ">
            <div className="apple-icon h-8 w-8 ">
                <img src={apple} alt="" className='h-8 w-8'  />
            </div>
            <div className="nav-item  font-black cursor-pointer">
                <p>Tanveer Ahmed</p>
            </div>
            <div className="nav-item cursor-pointer">
                <p>file</p>
            </div>
            <div className="nav-item cursor-pointer">
                <p>windows</p>
            </div>
            <div className="nav-item cursor-pointer">
                <p>Terminal</p>
            </div>
        </div>
        <div className="right flex gap-2.5 items-center">
            <div className="wifi h-6 w-6">
                <img src={wifi} alt="" className='h-6 w-6' />
            </div>
            <div className="date-time flex gap-2 items-center">
            
                    <>
                    <div className="date">{time.getDay()+1}/{time.getMonth()+1}/{time.getFullYear()}</div>
                    <div className="time">{time.toLocaleTimeString()}</div>
                    </>
                    
                
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav
