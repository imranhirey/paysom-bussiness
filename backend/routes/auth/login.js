let accounts=require('../../db/schemas/registerschema');
const { generatetoken } = require('../../helpers/tokens');
let router=require('express').Router()
router.post('/',async(req,res)=>{
    let data=req.body;
    let risk=req.body.risk
    console.log('xogta ',data)
    

   
    //login and generate token
    let account=await accounts.findOne({businessid:data.data.logininfo.email})
    console.log('account ',account)
   
   if(account !=null){
        if(account.businesspassword==data.data.logininfo.password){
            let token=generatetoken(account,exexp_time='1h')
            if (risk==2){
                // deactivate the account 
                let deactivate=await accounts.updateOne({businessid:data.data.logininfo.email},{$set:{business_status:'deactivated'}})
                console.log('deactivated',deactivate)
                // generate verification token and send it to the user
                let verificationtoken=generatetoken({
                    businessid:account.businessid,
                    risk:risk,
                    email:account.email,


                },exexp_time='10m')
                console.log('verificationtoken',verificationtoken)
                let verificationlink=`http://localhost:3000/verify?token=${verificationtoken}`
                // send the verification link to the user
                // notivy the user that the account is deactivated
                // send status of an authentication required
                res.send({
                    token,
                    msg:'login successful'
                })




            }
            else{
            
          
            res.send({
                token,
                msg:'login successful'
            })
            }
        }else{
            res.send({
                error:'Invalid Password'
            })
        }

        
    }
    else{
        res.send({
            error:'we cant find your account please register ' 
        })

    }
    
    
 
   
} )
module.exports=router;


