import React,{useState,createContext, useEffect} from 'react'
export const Globalcontexts=createContext()
export const Globalprofider=(props)=>{
  
    let [globals,setglobals]=useState({
        agreement_accepted:false,
        email:'',
        

    })
 

    return (
        <Globalcontexts.Provider value={[globals,setglobals]}>
            {props.children}
        </Globalcontexts.Provider>
    )

}
