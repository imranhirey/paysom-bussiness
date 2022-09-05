import React,{useState,createContext, useEffect} from 'react'
import Apicaller from '../resources/api'
// import Resourses from '../features/resouces'
export const Pincontext=createContext()
export const Pinprofider=(props)=>{
    let [pinisrequired,setpinisrequired]=useState(false)
    return (
        <Pincontext.Provider value={[pinisrequired,setpinisrequired]}>
            {props.children}
        </Pincontext.Provider>
    )

}
