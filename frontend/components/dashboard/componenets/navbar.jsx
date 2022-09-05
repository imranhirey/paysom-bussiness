import React from 'react'
import {Button} from '@mui/material'
import {animate, motion} from 'framer-motion'
import { useRouter } from 'next/router';

function Navbar() {
  let [animateBox, setAnimateBox] = React.useState(false)
  let navigate=useRouter()
   
  return (
    
     
       <motion.div onMouseOver={()=>{
      setAnimateBox(true)

    }}
    onMouseLeave={()=>{
      setAnimateBox(false)
    }
    }
    animate={
      animateBox ?{
        backgroundColor: '#171d33',
        color:'white',
        borderRadius:'16px',
        scale: 1.01,
        transition:{
          type:'tween',
          duration:0.5,
          ease:'easeInOut'
      },
      }:{
        backgroundColor: '#0e1326',
        color:'white',
        borderRadius:'10px',
        scale: 1,
        transition:{
          type:'tween',
          duration:0.5,
          ease:'easeIn'
      },
      }
    } style={{
        width:'95%',
        height:'60px',
        margin:'10px',
        backgroundColor:'#171d33',
        display:'flex',
        justifyContent:'start',
        alignItems:'center',
        borderRadius:'6px',
        

      }}>
        <Button color='inherit' onClick={()=>{
            navigate.push('/dashboard')
        }} style={{
          margin:'6px',
        }} variant='text'>Home</Button>
        <Button color='inherit' onClick={()=>{
            navigate.push('/dashboard/payments')
        }} style={{
          margin:'6px'
        }} variant='text'>Payments</Button><Button color='inherit' style={{
          margin:'6px'
        }} variant='text'>Customers</Button>
        
        </motion.div>
 

     
  

  )
}

export default Navbar