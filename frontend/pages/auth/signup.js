import { Button, TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import styles from '../../styles/auth/signup.module.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useRouter } from 'next/router';
import Link from "next/link";
import axios from 'axios';
import Apicaller from '../../resources/apicaller';
import Verifyemail from '../../authentications/verifyemail';
import { Globalcontexts } from '../../profiders/global';
function Signup() {
  let [globals,setglobals]=useContext(Globalcontexts)

  let {signupwrapper,signupbox,inputbox,input}= styles
  let [checked,setchecked]=useState(false)
  let [verneeded,setverneeded]=useState(false)
  let [bussinessinfo,setbussinessinfo]=useState({
   businessname:'',
    businessaddress:'',
    business_registration_number:'',
    businessphone:'',
    businessemail:'',
    businesswebsite:'',
    businessdescription:'',
    business_owner_name:'',
    password1:'',
    password2:''

    
  })
  let router= useRouter()

  let handlechange=(e)=>{
    setbussinessinfo({...bussinessinfo,[e.target.name]:e.target.value})

  }
  let handlesubmit=async (e)=>{
    e.preventDefault()
    console.log(bussinessinfo)
 let api=new Apicaller()
  let res=await api.signup(bussinessinfo)
 console.log(res)
 api.data={email:bussinessinfo.businessemail}
 api.sendvercode()
 setverneeded(true)
 setglobals({...globals,email:bussinessinfo.businessemail})



  }
  return (
    <div className={signupwrapper}>
      {verneeded ?<Verifyemail data={bussinessinfo}/>:<div className={signupbox}>
      <div style={{
        width:'30px',
        height:'30px',
        cursor:'pointer',
       
       
      
      }} onClick={()=>{
        router.back()
      }}>
      <ArrowBackIcon />
      </div>
       <div className={inputbox}>
        
     <form onSubmit={handlesubmit} >
     <TextField style={{
            margin:'7px'
          }} required onChange={(e)=>handlechange(e)} name='businessname' label='Bussiness Name'  className={input} fullWidth placeholder='Legal Bussiness Name'/>
       <TextField style={{
            margin:'7px'
          }} required onChange={(e)=>handlechange(e)} name='business_registration_number' disabled={checked} label='Bussiness Registration Number' fullWidth className={input}   placeholder='Legal Bussiness Number if any'/>
       <FormGroup  style={{
            margin:'7px'
          }} className={input}>
  <FormControlLabel   control={<Checkbox onChange={(e)=>{
    setchecked(e.target.checked)

  }} value={checked} />} label="this is not registered Bussiness" />
</FormGroup>
       <TextField style={{
            margin:'7px'
          }} required onChange={(e)=>handlechange(e)} name='business_owner_name' label='Bussiness Owner' className={input} fullWidth  placeholder='Bussiness Owner Nmae'/>
       <TextField style={{
            margin:'7px'
          }} required onChange={(e)=>handlechange(e)}  name='businessemail' label='Bussiness Email' className={input} helperText='This email will be verified' fullWidth  placeholder='Bussiness Email'/>
        <TextField style={{
            margin:'7px'
          }} required onChange={(e)=>handlechange(e)} name='businessphone' label='Bussiness Phone' className={input} fullWidth  placeholder='Bussiness Phone'/>
        <TextField style={{
            margin:'7px'
          }} required onChange={(e)=>handlechange(e)} name='businessaddress' label='Bussiness Address' className={input} fullWidth  placeholder='Bussiness Address'/>
        <TextField style={{
            margin:'7px'
          }} required onChange={(e)=>handlechange(e)} name='businesswebsite'label='Bussiness Website' className={input} fullWidth  placeholder='Bussiness Website'/>
        <TextField style={{
            margin:'7px'
          }} required onChange={(e)=>handlechange(e)} name='businessdescription' label='Bussiness Description' className={input} fullWidth  placeholder='Bussiness Description'/>
          <TextField style={{
            margin:'7px'
          }} required onChange={(e)=>handlechange(e)} type='password' name='password1' label='New Password' className={input} fullWidth  placeholder='Create New Password'/>
           <TextField style={{
            margin:'7px'
          }} required onChange={(e)=>handlechange(e)} type='password' name='password2' label='Confirm Password' className={input} fullWidth  placeholder='Confirm Your Password'/>
<Button type='submit'  style={{
  margin:'7px'
}} fullWidth variant='contained' >Next</Button>
     </form>
<Button>Already have an account?</Button>
<Link href='/auth/login'>Login</Link>
       </div>

</div>}
      

    </div>
  )
}

export default Signup