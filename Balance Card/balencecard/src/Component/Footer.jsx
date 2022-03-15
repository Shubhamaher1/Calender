import React, { useEffect, useState } from 'react'

export const Footer = () => {
    const data = new Date();
    const[time , settime]=useState(data.toLocaleTimeString());
    useEffect(()=>{
      setInterval(()=>{
        data=new Date();
        settime(data.toLocaleTimeString())
      },1000)
    },[])
  return (
    <div id='footer'>
        <div>@ Shubham S Aher </div>
        <div>Copyright : Shivshakti P.V.T Limited</div>
        <div>Current Time:{time}</div>
        </div>
  )
}

