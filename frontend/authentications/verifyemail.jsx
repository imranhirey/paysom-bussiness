import { HelpCenter, SecurityUpdate } from '@mui/icons-material'
import { Alert, Button, TextField } from '@mui/material'
import React from 'react'
import styles from '../styles/auth/verifyemail.module.css'
import Timer from '../components/widgets/timer';
import Apicaller from '../resources/apicaller';
import Toast from '../components/widgets/toast';
import { useRouter } from 'next/router';

function Verifyemail({data}) {
    let {wrapper,verificationbox,input,btn,descriptions,title,des,bottom}=styles
    let router=useRouter()
    console.log(data)
    let [resend ,setresend]=React.useState(false)
    let [status,setstatus]=React.useState('')
    let [otp,setotp]=React.useState('')
    let checkotp=async()=>{
      let api=new Apicaller()
      api.data={
        vercode:otp,
        email:data.businessemail
      }
      let res= await api.verifycode()
      if (res.data.message=="verified"){
        setstatus({
          type:'success',
          message:'Email verified successfully !' 
        })
        setTimeout(() => {
          setstatus('')
          router.push({
            pathname: '/onetimepages/welcome',
            query: { name: 'Someone' }
        })
          
        }, 1000);
        
       

      }
      else{
        setstatus({
          type:'error',
          message:'Invalid OTP '
        })
        setTimeout(() => {
          setstatus('')
          
        }, 1000);

        
      }
    }
  return (
    <div className={wrapper}>
      
      
        <div className={verificationbox}>
        {status &&  <Alert severity={status.type} style={{
           
          }}>{status.message} </Alert>}
       
          <div className={descriptions}>
            
            <p className={title}>Verify Your Email</p>
            
            <br></br>
            <p className={des}>we have sent you 6 didgit verification code to your email {data.businessemail}</p>
            <p className={des}>please enter the code in the box below to  verify your account email</p>


          </div>
          
          <div className={input}>
          <TextField onChange={(event)=>{
            setotp(event.target.value)


          }}  label='verification code' helperText='this code will expire in 10 minutes' variant='standard' style={{
            margin:'10px',
            width:'300px',
            fontSize:'40px'
           
          }} placeholder='Verification Code'/>
            <Button onClick={ ()=>{
              checkotp()
            }} disabled={!otp?true:false} variant='contained' style={{
              margin:'10px'
            }}>Verify</Button>
           
            <Button disabled={resend} onClick={async()=>{
              setresend(true)
              let api= new Apicaller()
              api.data={email:data.businessemail}
              let res= await api.sendvercode()
              console.log(res)


              

            }}>resend {resend && <Timer setresend={setresend}/>}</Button>
           <Toast hor='center' ver='top' message='verification code sent'/>
        
           
            
            
         
        

</div>
<div className={bottom}>

</div>

        
              
        </div>
           
    </div>
  )
}

export default Verifyemail