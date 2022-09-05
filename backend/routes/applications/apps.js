let router=require('express').Router()
let Apps=require('../../db/schemas/Appschema')
let uuid=require('uuid')
let makeid= require('../../helpers/makeid')
router.post('/createapp',async(req,res)=>{
    let {appname,appendpoint,ownerid}=req.body;
    console.log('info  ',req.body)
    let data={
        appname,
        appendpoint,
        appowner:ownerid,
        appsecretssecrets:{
            publishkey:'P'+uuid.v4(),
            Secretkey:'S'+uuid.v4(),

        },
        appid:makeid(8),
        appstatus:'active',
        appcreationdate:new Date().toISOString(),
        apprequests:[]

    }
    let app=new Apps(data);
    let resp=await app.save();
    res.send(resp);

    console.log('data ',resp)

})
router.post('/getapp',async(req,res)=>{
    let {accountid}=req.body;
    console.log('accountid',accountid)
    let app=await Apps.find({appowner:accountid});
    res.send(app);
   

})
// delete app
router.post('/deleteapp',async(req,res)=>{
    let {appid}=req.body;
    console.log('appid',appid)
    let app=await Apps.findOneAndDelete({appid});
    res.send({
        status:'success',
        message:'app deleted'
    });
   

})
// update app
router.post('/updateapp',async(req,res)=>{
    let {appid,appname,appendpoint}=req.body;
    console.log('appid',appid)
    let app=await Apps.findOneAndUpdate({appid},{appname,appendpoint});
    res.send({
        status:'success',
        message:'app updated'
    });
   

})



module.exports=router;

