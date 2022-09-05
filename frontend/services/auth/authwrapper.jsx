import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { useEffect } from 'react'
import { Usercontext } from '../../profiders/userprofider'
import { validateuser } from '../../validators/uservalidator'
import {CircularProgress, LinearProgress} from '@mui/material'

function Authwrapper(props) {
    // check if there is a account
    let [account,setacount]=useContext(Usercontext)
    console.log(account)
    let router=useRouter()
 useEffect(()=>{

    

 },[])
    // if user => refresh the token
    if (account=='noaccount'){
      return (
       <LinearProgress/>
      )
    }
    if (account?.business_status=='deactivated'){
      return (
        <CircularProgress/>
      )
      
    }
    // if not => redirect to auth page
  return (
    <div>{props.children}</div>
  )
}

export default Authwrapper