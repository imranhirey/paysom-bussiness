let router=require('express').Router();
let createpaymentintent=require('../../resources/create_intent')
let Paymentintent= require('../../db/schemas/intentsschema');
const { getuser } = require('../../helpers/tokens');
let users=require('../../db/schemas/Userschema');
const checkaccountbalance = require('../../helpers/Blancechecker');
const updateuserblance = require('../../resources/updateuserblance');
const Updatebussinessblance = require('../../resources/Updatebussinessblance');
let createtransaction=require('../../resources/Createtransaction')
let account= require('../../db/schemas/registerschema')

// paymentIntent is the payment intent object and bussiness accounts can only generate it

router.post('/create',async(req,res)=>{
   /*
    * expected body is - bussiness-id - amount -reason 
   */
   let {bussinessid}=req.body;
   
   let resp=await createpaymentintent({
      bussinessid,amount:req.body.data.amount,reason:req.body.data.reason
   });
   res.send(resp);
 


   


})
router.post('/get',async(req,res)=>{
   let bussinessid=req.body.bussinessid;
   let paymentintent=await Paymentintent.find({'who.bussinessid':bussinessid});
  res.send(paymentintent);

})
router.post('/getintentinfo',async(req,res)=>{
   let intentid=req.body.intentid;
   console.log(intentid)
   let paymentintent=await Paymentintent.findOne({intent_id:intentid});
   console.log(paymentintent)
   if(paymentintent){
         res.send(paymentintent);
   }
   else{

      res.send({
         status:'error',
         message:'no payment intent found'
      })
   }
  

})

router.post('/payintent',async(req,res)=>{
   // expected body is - intentid - userid
  let {intentid,user,token}=req.body;

  // first check the intent information and then check the user account balance
   let intentinfo=await Paymentintent.findOne({intent_id:intentid});
   // check the intent status if it paid or not 
   if(intentinfo.status=='paid'){
      res.send({
         status:'error',
         message:'payment intent already paid'
      })
   }



   else{
        // check the token and user id are same or not
      let userka= getuser(token);
      // compare the the two emails and if they are same then only proceed
      if (userka.email==user.email){
         let  userfromdb=await users.findOne({email:user.email})
         // check the user blance is greater than the amount to be paid
      
         let hasenoughbalance=await checkaccountbalance(userfromdb.cus_id,intentinfo.ammount);
         if(hasenoughbalance){
            // now detuct the amount from the user account
            let newblance=userfromdb.finanaces.blance-intentinfo.ammount;
            let updateduserblance= await updateuserblance('detuct',userfromdb.cus_id,intentinfo.ammount);
            // update bussiness acount blance
            let updatedbussinessblance= await Updatebussinessblance('add',intentinfo.who.bussinessid,intentinfo.ammount);
            
            if (updateduserblance.status=='success' && updatedbussinessblance.status=='success'){
               // update the intent status to paid
               let updatedintent=await Paymentintent.updateOne({intent_id:intentid},{status:'paid'});
               // add to the transations list 
               let trx_info = {
                  from:userfromdb,
                  to:intentinfo.who,
                  ammount:intentinfo.ammount,
                };
                  let trx_id=await createtransaction(trx_info);

            // add this customer to the list of customers of this bussiness 
            let updatedbussiness= await  account.updateOne({businessid:intentinfo.who.bussinessid},{$push:{customers:userfromdb.cus_id}});
            console.log('kanaa la update gareeyay ',intentinfo.who);
               res.send({
                  status:'success',
                  message:'payment intent paid'
               })
            }
         }
      }
      else
      {
         res.send({
            status:'error',
            message:'suspeciuos activity'
         })
      }
   }
   /* The code above does the following, explained in English:
1. First, we get the intent id from the body of the request.
2. We then find the intent in the database.
3. We then check the intent status. If it is paid, we send an error message.
4. We then get the user id from the body of the request.
5. We then find the user in the database.
6. We then get the user's account balance.
7. We then check if the user has enough balance to pay for the intent.
8. If the user has enough balance, we deduct the amount from the user's account.
9. We then update the user's account balance in the database.
10. We then update the bussiness account balance in the database.
11. We then update the intent status to paid in the database.
12. We then add to the transactions list in the database.
13. We then send a success message. */



  

})
module.exports=router;