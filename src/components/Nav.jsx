import React, { useEffect, useEffectEvent, useState } from 'react'

const Nav = () => {
    const [date, setdate] = useState(new Date())

     useEffectEvent(()=>{},[])
  return (
    <div>
      <nav className='flex justify-between px-2 items-center gap-2.5 font-semibold   bg-gray-400'>
        <div className="left flex gap-2.5   py-2 ">
            <div className="apple-icon">
                <img src="" alt="" />
            </div>
            <div className="nav-item">
                <p>Tanveer Ahmed</p>
            </div>
            <div className="nav-item">
                <p>file</p>
            </div>
            <div className="nav-item">
                <p>windows</p>
            </div>
            <div className="nav-item">
                <p>Terminal</p>
            </div>
        </div>
        <div className="right">
            <div className="date-time">
                hello
                {
                    
                }
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav
