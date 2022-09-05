
let Paymentintent= require('../db/schemas/intentsschema')
let makeid =require('../helpers/makeid')
var QRCode = require('qrcode')
let fs = require('fs');
const saveImage = require('./uploadimagefrombase64');
let accounts = require('../db/schemas/registerschema')

 async function createpaymentintent (data){
console.log('data ',data)
let {bussinessid,amount,reason,surl,furl}=data; // surl means success url and furl means failure url
// first create payment intent id and then create qr code for that payment intent - global
console.log('before creating payment intent',bussinessid,amount,reason)
let paymentIntentId='PI'+makeid(20);
console.log(paymentIntentId)
let qrCode=await QRCode.toDataURL(paymentIntentId,{
    width: 400,
    height: 400,
    colorDark : "#000000",
    colorLight : "#ffffff",
});
// convert base64 to buffer and then save it to db 
let res= saveImage(qrCode,paymentIntentId);
console.log(res)
let link='http://localhost:5500/qr/qr'+paymentIntentId+'.png';
let paymenturl='http://localhost:3000/pay/'+paymentIntentId;
let  bussinessinfo=await accounts.findOne({businessid:bussinessid})
console.log('bussinessinfo ',bussinessinfo)
let paymentinten= new Paymentintent({
    intent_id:paymentIntentId,
    who:{bname:bussinessinfo.businessname,bussinessid:bussinessid,bussinessimage:bussinessinfo.business_logo,bussinessaddress:bussinessinfo.business_address},
    status:'unpaid',
    paidby:'', // user id 
    ammount:amount,
    reason:reason,
    qrcodeurl:link,
    payment_url:paymenturl,
    created_at:Date.now(),
    updated_at:Date.now(),
    success_url:surl,
    failure_url:furl,
})
 paymentinten.save((err,doc)=>{
    if(err){
        console.log(err.message)
    }
    else{
        console.log(doc)
    }
} )




return paymentinten;
/*
* expected return is a link to the payment intent
*/
}
module.exports=createpaymentintent;
// data=> 