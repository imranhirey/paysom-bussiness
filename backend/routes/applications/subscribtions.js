let subscribtions= require('../../db/schemas/Subscriptionschema')
let router=require('express').Router();


router.post('/create/:publishkey',async(req,res)=>{
    let {publishkey}=req.params;
    let {name,amount,type}=req.body; 
 
  console.log(req.body,publishkey);
})

module.exports=router;