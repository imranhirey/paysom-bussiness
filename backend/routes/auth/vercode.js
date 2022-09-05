let router= require('express').Router()
let Registerschema=require('../../db/schemas/registerschema')
let makeid = require('../../helpers/makeid')
const updateotp = require('../../helpers/updatotp')

router.post('/send',async(req,res)=>{
    console.log(req.body)
    let email=req.body.data.email
    let otp=makeid(6)
    let resp=await updateotp(email,otp)
    
   // send via email or sms or both 
   res.status(200).send({message:'otp sent'})

})   
router.post('/verify',async(req,res)=>{
    let email=req.body.data.email
    let vercode=req.body.data.vercode
    let account=await Registerschema.findOne({businessemail:email})
    console.log(account.refrences.vercode ,'==', vercode)
    if(account.refrences.vercode==vercode){
        res.send({message:'verified'})
    }else{
        res.send({message:'invalid otp'})
    }
}
) 

module.exports=router