let accounts=require('../../db/schemas/registerschema')
let router=require('express').Router()
router.post('/',async(req,res)=>{
    //type of the refrence 
   let data=req.body.data
   // print keys of the data object
   let keys=Object.keys(data)
   //update agreement_accepted to true in refrences object
   accounts.findOneAndUpdate({email:data.email},{$set:{"refrences.agreement_accepted":true}},{new:true},(err,doc)=>{
         if(err){
              res.send({
                    status:false,
                    message:'error in updating agreement'
                })
         }else{
                res.send({
                        status:true,
                        message:'agreement updated'
                    })
                    
              
         }
    } )
    

 



})

module.exports=router;

