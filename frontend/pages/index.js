import { StartRounded } from "@mui/icons-material";
import { Button, Divider, FormControlLabel, Radio, Switch } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Link from "next/link";
function Home(props) {

  let [nigtmode,setnightmode]=useState(true)
 
  console.log(props)
  let {
    homewrappernight,
    homewrapperday,
    top,
    actions,
    btn,
    center,
    subtitle,
    title,
    cards,
    card,
    image,
    howitworks,
    steps,
    step,
    stepsubtitle,
    steptitle,
    stepdes
  } = styles;
  return (
    <div className={nigtmode?homewrapperday:homewrappernight}>
      
      <div className={top}>
        
        <img
          width={200}
          style={{
            marginLeft: "150px",
          }}
          height={200}
          src="/logo.png"
        />
        
        <div className={actions}>
        
    

          <Button style={{
            margin:'10px'
          }} className={btn} variant="outlined">
            API
          </Button>
          <Button style={{
            margin:'10px'
          }} className={btn} variant="outlined">
            Projects
          </Button>
          <Button style={{
            margin:'10px'
          }} className={btn} variant="outlined">
            Contact
          </Button>
          <Link href='/auth/login'>
          <Button style={{
            margin:'10px'
          }} className={btn} variant="outlined">
            Login
          </Button></Link>

          <Button style={{
            margin:'10px'
          }} className={btn} >
          <div className={btn}>
    <label style={{
    
     
  }} className="theme-switch" >
      <input onChange={()=>{
        setnightmode(!nigtmode)
      }} type="checkbox" id="checkbox" />
      <div className="slider round"></div>
</label>
    </div>

          </Button>
         
          
        </div>
        
      </div>
      <div className={center}>
        <p className={title}>GROW YOUR BUSSINESS WITH <a style={{
          color:'#8BC53F'
        }}>PAYSOM</a></p>
        <p className={subtitle}>FOCUS YOUR SERVICE AND LEAVE US THE REST</p>
        <div style={{
          margin:'10px'
        }}>
        <Button
          color='info'
          style={{
            margin:'10px'
          }}
            className={btn}
            variant='contained'
          >
            Contact us
          </Button>
         <Link href='/auth/signup'>
         <Button
          color='success'
          style={{
            margin:'10px'
          }}
            className={btn}
            variant='contained'
          >
            Get start
          </Button></Link>
        </div>
      </div>
      
      <div className={cards}>
        <div className={card}>
          <img className={image} src="/payment-gateway.jpg" />
        </div>
        <div className={card}>
          <img className={image} src="/happy.webp" />
        </div>{" "}
        <div className={card}>
          <img className={image} src="/paymentcomplete.jpg" />
        </div>
      </div>
      <div style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
      }}>
      <Divider style={{
        width:'50%'
      }}/>
      </div>
      <div className={howitworks}>
        <div className={steps}>
          <div className={step}>
            <p className={steptitle}>Step One</p>
            <p className={stepsubtitle}>Fill The Form</p>
            
          </div>
          <div className={step}>
          <p className={steptitle}>Step Two</p>
            <p className={stepsubtitle}>Verify Your Identity</p>
            </div>
            <div className={step}>
            <p className={steptitle}>Step Three</p>
            <p className={stepsubtitle}>Enjoy Our Services</p>
            
            </div>
            
        </div>
        <div></div>
        
      </div>
    </div>
  );
}

export default Home;
