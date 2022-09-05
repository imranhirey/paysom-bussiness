// keys checker will be dynamic and will be used to check if the keys are valid
let router=require('express').Router()
let applications=require('../../db/schemas/Appschema')
const { verifytoken } = require('../../helpers/tokens')
let generatetoken=require('../../helpers/tokens').generatetoken

router.post(`/:publishkey`,async(req,res)=>{
    let publishkey=req.params.publishkey
    let secretkey= req.body.secretkey
    console.log('waa lisoo codasaday')
    // log the keys
 
    // log theparams
    console.log('secret',secretkey,'publish key',publishkey)
    let app=await applications.findOne({"appsecretssecrets.publishkey":publishkey})
    console.log('app',app)
    if(app!=null){
        console.log('app found',app.appsecretssecrets[0].Secretkey)
        if(app.appsecretssecrets[0].Secretkey==secretkey){
            // add this request to the app requests array
            let request={
                requestdate:new Date().toISOString(),
                requesttype:'key checking',
                   
            }
            let resp=await applications.updateOne({appid:app.appid},{$push:{apprequests:request}})
            // generate token
            let token= generatetoken({
                appid:app.appid,
                appname:app.appname,
                date:new Date().toISOString(),
            },'900h')
            res.send({
                status:'success',
                message:'great you have successfully connected to'+app.appname,
                token:token // decode the token so that only this server can understand it
            })
        }
        else{
            res.send({
                status:'error',
                message:'keys are invalid'
            })
        }
    }
    else{
        res.send({
            status:'error',
            message:'keys are invalid'
        })
    }
   


})
// check token 
router.post(`/checktoken/:publishkey`,async(req,res)=>{
    console.log('check token')
    let token=req.body.token.replace(/\s/g, '');
    let publishkey=req.params.publishkey
    console.log('token',token,'publishkey',publishkey)
    // decode the token
    if (token) {
        try {
            console.log('token',token)
            let decodedtken=  verifytoken(token)
            console.log('decoded token',decodedtken)
            res.send({
                status:'success',
                message:'token is valid'
            })
        } catch (error) {
            console.log('error',error)
            res.send({
                status:'error',
                message:'token is invalid'
            })
            
        }
       

    }
    else{

        res.send({
            status:'error',
            message:'token not profided'
        })
    }
 
   

})

module.exports=router;