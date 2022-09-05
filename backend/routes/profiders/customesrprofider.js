let router=require('express').Router()
let account= require('../../db/schemas/registerschema')

router.post('/get',async(req,res)=>{ // this route will take bussiness id and will return array of all customers of this bussiness
    console.log('in the getting account route',req.body)
    let bussinessid=req.body.accountid
    let accounts=await account.findOne({businessid:bussinessid});
    console.log(accounts)
    res.json({
    customers:accounts.customers
    });
  
})
module.exports=router;