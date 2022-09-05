const { verifytoken } = require('../../helpers/tokens')

let router=require('express').Router()

router.post('/verifytoken',async(req,res)=>{
    let token=req.body.token
   try{
    let resp=verifytoken(token)
    console.log('resp ',resp)
    res.send({
        resp
    })

   }
    catch(err){
        res.send({
            error:err.message
        })
    }
    
   

   


})
module.exports=router;