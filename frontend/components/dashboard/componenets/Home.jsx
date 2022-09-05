import React from 'react'
import { Appchart } from '../../widgets/chart';
import { motion } from 'framer-motion';

function Home() {
  let [animateBox, setAnimateBox] = React.useState(false)
  return (
    <div style={{
      width:'99%',
      height:'90vh',
     
      margin:'10px',
      
    }}>
      
      <motion.div onMouseOver={()=>{
        setAnimateBox(true)

      }}
      onMouseLeave={()=>{
        setAnimateBox(false)
      }
      }
       animate={animateBox?{
         backgroundColor: 'white',
         borderRadius:'10px',
         scale: 1.03,
         transition:{
           type:'tween',
           duration:0.5,
           ease:'easeInOut'}
        
      }:
      {
        backgroundColor: '#f5f5f5',
        borderRadius:'10px',
        scale: 1,
        transition:{
          type:'tween',
          duration:0.5,
          ease:'easeIn'}
       
     }} style={
      {
        width:'500px',
        height:'300px',
        margin:'10px',
        borderRadius:'10px',
        backgroundColor:'#e3e1e1',
        padding:'10px',

      }
      }>
        <Appchart/>

      </motion.div>
      
    </div>
  )
}

export default Home