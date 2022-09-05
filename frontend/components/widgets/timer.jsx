import React, { useState,useEffect } from 'react'

function Timer({setresend}) {
    let [seconds,setseconds]=useState(60)
    useEffect(()=>{
        let interval=setInterval(()=>{
            setseconds(seconds-1)
        },1000)
        if(seconds===0){
          clearInterval(interval)
          setresend(false)
        }
        return ()=>{
          clearInterval(interval)
          
        }
    })


      
   
  return (
    <p>  in {'in '+seconds} seconds</p>
  )
}

export default Timer