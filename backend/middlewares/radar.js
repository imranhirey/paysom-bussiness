const { is_account_exist } = require("../helpers/isitvalid");
let accounts= require('../db/schemas/registerschema')

// inside middleware handler
const ipMiddleware = function(req, res, next) {
  console.log('locationka aa joogo ')
   
  //   // check the bussiness account location and compare it with the one in the database and if they are the same then allow the user to login 
  //   // if not then redirect the user to the login page
  //   //last_confirmed_location 
  //   let risk_score=0   // this is the risk score of the user 
  //                      // 0 is the lowest risk score and 2 is the highest risk score
  //                      // 0 means the user is not at risk of fraud
  //                      // 2 means the user is at risk of fraud
  //                      // 1 means the user is at risk of fraud but not very high
                       
  //   let accountnumber=req.body.data.bussinessnumber
  // is_account_exist(accountnumber).then(async(result)=>{
  //   if(result){
  //       let last_confirmed_location=result.refrences.last_confirmed_location
  //       console.log('last_confirmed_location',last_confirmed_location)
  //       if (Object.keys(last_confirmed_location).length==0){
  //           let res=await accounts.updateOne({businessid:accountnumber},{$set:{"refrences.last_confirmed_location":req.body.data.location}})
  //           console.log('updated',res)

  //       }
  //       else{
  //           // check if the location is the same as the one in the database
  //         let last_confirmed_country=last_confirmed_location.country_name
  //         let last_confirmed_ipv4=last_confirmed_location.IPv4
  //         let last_confirmed_latitude=last_confirmed_location.latitude
  //         let last_confirmed_longitude=last_confirmed_location.longitude
  //         // checking the request location
  //           let request_country=req.body.data.location.country_name
  //           let request_ipv4=req.body.data.location.IPv4
  //           let request_latitude=req.body.data.location.latitude
  //           let request_longitude=req.body.data.location.longitude
  //           // checking the risk score of the user
  //           console.log('first ', last_confirmed_country==request_country && last_confirmed_ipv4==request_ipv4 && last_confirmed_latitude==request_latitude && last_confirmed_longitude==request_longitude)

  //           if(last_confirmed_country==request_country && last_confirmed_ipv4==request_ipv4 && last_confirmed_latitude==request_latitude && last_confirmed_longitude==request_longitude){
  //               risk_score=0
  //           }
  //           else if (last_confirmed_country==request_country && last_confirmed_ipv4!=request_ipv4){
  //               risk_score=1
  //           }
  //           else{
  //               risk_score=2
  //           }
  //           req.body.risk=risk_score

        
  //           // else if(requ ){
  //           //     risk_score=1
  //           // }


  //       }
  //     next();
  //   }
  //   else{
  //     res.status(401).json({
  //       msg:'account not found'
  //     })
  //   }
  // }
  //   )
  
next()


};
module.exports = ipMiddleware;