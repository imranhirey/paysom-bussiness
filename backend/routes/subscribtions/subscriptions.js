let Subscriptions= require('../../db/schemas/Subscriptionschema');
let Users = require('../../db/schemas/Userschema');
let Accounts= require('../../db/schemas/registerschema');
let router = require('express').Router();
let barcode = require('jsbarcode')
var QRCode = require('qrcode')
let fs = require('fs');
let Saveimage=require('../../resources/uploadimagefrombase64')
const { createCanvas, loadImage } = require("canvas");


router.post('/create',async(req, res) => {
    console.log(req.body)
    async function create(dataForQRcode, center_image, width, cwidth) {
        const canvas = createCanvas(width, width);
        QRCode.toCanvas(
          canvas,
          dataForQRcode,
          {
            errorCorrectionLevel: "H",
            margin: 1,
            width: 400,
        height: 400,
            color: {
              dark: "#858585",
              light: "#fcfffd", 
            },
          }
        );
            ``
        const ctx = canvas.getContext("2d");
        const img = await loadImage(center_image);
        const center = (width - cwidth) / 2;
        ctx.drawImage(img, center, center, cwidth, cwidth);
        return canvas.toDataURL("image/png");
      }

    //////////////
    let {bussinessid,type,amount,name}=req.body
    let subid='SUB'+bussinessid+'_'+type+'_'+Math.floor(Math.random()*100000000000)
    create(subid,'http://localhost:5500/qr/logo.png',200,200)
    .then((data)=>{
        let resp= Saveimage(data,subid);
        let link='http://localhost:5500/qr/qr'+subid+'.png';
        console.log(link)
        let subscription = new Subscriptions({
            sub_id:subid,
            type:type,
            sub_amount:amount,
            sub_name:name,
            sub_status:'inactive',
            sub_start_date:new Date(),
            sub_end_date: new Date(),
            sub_created_date:new Date(),
            sub_created_by:{
                bussiness_number:bussinessid
            },
            subscribers_count:0,
            sub_qr_code:link
        })
        subscription.save((err,subscription)=>{
            if(err){
                res.send({
                    status:'error',
                    message:'error in saving subscription'
                })
            }
            else{
                res.send({
                    status:'success',
                    message:'subscription created successfully'
                })
            }
        }
        )
   

    })
    

  
    ////////////// 

  



    /*
     * expected body => subscription type, subscription amount, subscription start date, subscription end date, subscription created by
     */
    // let {bussinessid,type,amount}=req.body
    // generate barcode with jsbarcode in nodejs
   
   
 
    

})
router.post('/getallsub',(req,res)=>{
    let {accountid}=req.body
    Subscriptions.find({'sub_created_by.bussiness_number':accountid},(err,subscriptions)=>{
        if(err){
            res.send({
                status:'error',
                message:'error in getting subscriptions'
            })
        }
        else{
            res.send({
                status:'success',
                message:'subscriptions fetched successfully',
                subscriptions:subscriptions
            })
        }
    })
})

// get subscribtion details by subscription id

router.post('/get', async(req, res) => {
let {sub_id}=req.body
console.log(sub_id,Array.isArray(sub_id))
// sub_id can be array of sub_id or single sub_id so we need to check if it
// is array or not and then we need to find the subscription details for each sub_id
if(Array.isArray(sub_id)){
    console.log('array',sub_id)
    let subscriptions = await Subscriptions.find({sub_id:{$in:sub_id}})
    console.log(subscriptions)
    res.send({
        status:'success',
        message:'subscription details found',
        subscriptions:subscriptions
    })
}
else{
    let subscription = await Subscriptions.findOne({sub_id:sub_id})
    res.send({
        status:'success',
        message:'subscription details found',
        subscription:subscription
    })
}

})
// get sub owner
router.post('/getsubowner',async(req,res)=>{
    let {sub_id}=req.body
    let subscription = await Subscriptions.findOne({sub_id:sub_id})
    console.log(subscription)
try{
    let owner = await Accounts.findOne({businessid:subscription.sub_created_by.bussiness_number})
    res.send({
        status:'success',
        message:'subscription owner details found',
        owner:owner
    })

}
catch(err){
    res.send({
        status:'error',
        message:'error in getting subscription owner details'
    })

}
})
router.post('/subscribe', async(req, res) => {
    console.log(req.body)
   let {sub_id,user}=req.body
    // find user
    let userk=await Users.findOne({cus_id:user})
    if(userk){
        // find subscribtion
        let subscription=await Subscriptions.findOne({sub_id:sub_id})
        if(subscription){
            // check if user has already subscribed
            let isSubscribed=false
            
            userk.subscribtions.forEach(sub=>{
                if(sub==sub_id){
                    isSubscribed=true
                }
            })
            if(isSubscribed){
                res.send({
                    status:'error',
                    message:'user has already subscribed'
                })
            }
            else{
                // subscribe user
                userk.subscribtions.push(subscription.sub_id)
                userk.save((err,user)=>{
                    if(err){
                        res.send({
                            status:'error',
                            message:'error in subscribing user'
                        })
                    }
                    else{
                        // increase subscription count
                        subscription.subscribers_count=subscription.subscribers_count+1
                        // make it active if it is inactive
                        if(subscription.sub_status=='inactive'){
                            subscription.sub_status='active'
                        }
                        // update sub start date
                       
                         subscription.sub_start_date=new Date()
                     
                        subscription.save((err,subscription)=>{
                            if(err){
                                console.log(err)
                            }
                            else{
                                console.log('subscription count increased')
                            }
                        })
                        
                        res.send({
                            status:'success',
                            message:'user subscribed successfully'
                        })
                    }
                })
            }
        }
        else{
            res.send({
                status:'error',
                message:'subscription not found',
                subscription:subscription
            })
        }
        
       
    }
    else{
        res.send({
            status:'error',
            message:'user not found'
        })

    }
})
router.post('/unsubscribe', async(req, res) => {
    let {subid,userid}=req.query
    // find user
    let user=await Users.findOne({cus_id:userid})
    if(user){
        // find subscribtion
        let subscription=await Subscriptions.findOne({sub_id:subid})
        if(subscription){
            // check if user has already subscribed
            let isSubscribed=false
            user.subscribtions.forEach(sub=>{
                if(sub==subid){
                    isSubscribed=true
                }
            })
            if(isSubscribed){
                // unsubscribe user
                user.subscribtions=user.subscribtions.filter(sub=>sub!=subid)
                user.save((err,user)=>{
                    if(err){
                        res.send({
                            status:'error',
                            message:'error in unsubscribing user'
                        })
                    }
                    else{
                        res.send({
                            status:'success',
                            message:'user unsubscribed successfully'
                        })
                    }
                })
            }
            else{
                res.send({
                    status:'error',
                    message:'user has not subscribed'
                })
            }
        }
        else{
            res.send({
                status:'error',
                message:'subscription not found',
                subscription:subscription
            })
        }
        
       
    }
    else{
        res.send({
            status:'error',
            message:'user not found'
        })

    }
})
router.post('/rechargesubscribers', async(req, res) => {})
module.exports = router;