import React from 'react'
import {motion} from 'framer-motion'
import Animations from '../animations/sidebar';
import Sidebarstyles from '../styles/sidebar';


function Sidebar() {
  let animations= new Animations()
  let [visible,setvisible]=React.useState(false)
  let styles= new Sidebarstyles()
 
  
  return (
   
  
 
    <div style={{

    }}>
    <motion.button onClick={()=>{
      setvisible(!visible)
    }} animate={animations.button.visible}>{visible?'close':'show'}</motion.button>
    <motion.div  animate={animations.sidebar[visible?'visible':'hidden']}  style={styles.sidebarwrapper}>
    <motion.div style={{
      display:'relative',
      width:'100%',
      height:'100%',
    }}>
     
    </motion.div>



    </motion.div></div>
    
    
   

  )
}

export default Sidebar