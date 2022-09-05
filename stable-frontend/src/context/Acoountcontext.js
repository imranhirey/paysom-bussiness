import React,{useState,createContext, useEffect} from 'react'
import Apicaller from '../resources/api'
// import Resourses from '../features/resouces'
export const Accountcontext=createContext()
export const Accountprofider=(props)=>{
   useEffect(()=>{
    let getuser=async()=>{
        let usertoken=localStorage.getItem('token')
        if (usertoken){
            let api=new Apicaller()
            let res= await api.verifytoken(usertoken)
            console.log('has token ')
            
            if(res.data.error){
                console.log(res.data.error)
                // remove local storage
                localStorage.removeItem('token')
                setaccount(null)
                console.log('has token but it is invalid')

                
                
            }
            else{
               setaccount(res.data.resp.data)
                console.log('has token and it is valid')
              
            }
            
        }
        else{
            setaccount(null)
            console.log('has no token')
        }
    }
    getuser()
   },[])
   
    let [account,setaccount]=useState('null')

    console.log(localStorage.getItem('token'))

    return (
        <Accountcontext.Provider value={[account,setaccount]}>
            {props.children}
        </Accountcontext.Provider>
    )

}
