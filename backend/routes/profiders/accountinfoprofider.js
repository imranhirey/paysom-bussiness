let accounts=require('../../db/schemas/registerschema');
const { verifytoken } = require('../../helpers/tokens');

let router=require('express').Router()
router.post('/',async(req,res)=>{
    console.log('in the getting account route')
    let token=req.body.token;
    try {
    let verified=verifytoken(token)
    res.status(200).send({
        account:verified,
        msg:'ok'
    })
        
    } catch (error) {
        res.send({
            error:error.message,
            msg:'notok'
        })
        
    

  
} })

module.exports=router;