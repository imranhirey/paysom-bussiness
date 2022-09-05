import React,{useState,createContext, useEffect} from 'react'
import Apicaller from '../resources/apicaller';
export const Usercontext=createContext()
export const Userprofider=(props)=>{
  useEffect(()=>{
    let getaccount=async()=>{
        let token=localStorage.getItem('token')
        console.log('tokenka',token)
    if(token!=null){
       // verify token
       console.log('verifying token')
       let api=new Apicaller()
       let res=await api.getaccount(token)
      
    }
    else{
      console.log('do something else')

    }
    }
    getaccount()

  },[])
   
    let [user,setuser]=useState('noaccount')
  

    return (
        <Usercontext.Provider value={[user,setuser]}>
            {props.children}
        </Usercontext.Provider>
    )

}
