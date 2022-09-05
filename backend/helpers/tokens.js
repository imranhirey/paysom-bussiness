let jwt=require('jsonwebtoken')
let secret='mysecret' 
let generatetoken=(data,exp_time)=>{
    let token=  jwt.sign({
        data
    },secret,{expiresIn:exp_time})
    return token
}
let verifytoken=(token)=>{ // verify the token takes toke and return the data
    console.log('in the verification',token=='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImFwcGlkIjoiUkNWM1ZHUEEiLCJhcHBuYW1lIjoieWV0cmpoamhqaCIsImRhdGUiOiIyMDIyLTA4LTI5VDA3OjQ4OjQ1LjAzNVoifSwiaWF0IjoxNjYxNzU5MzI1LCJleHAiOjE2NjQ5OTkzMjV9.X8x7yeOfS2mv9ROXIrBBwVD01KGhuyI2KGsnEDgHLK0')
   try{
       let data= jwt.verify(token,secret)
       return data
   }
    catch(err){
      throw new Error(err.message)
    }

}
let getuser=(token)=>{
    let data=verifytoken(token)
    return data
}

module.exports={
    generatetoken,
    verifytoken,
    getuser
}
