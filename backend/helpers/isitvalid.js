let accounts=require('../db/schemas/registerschema')
let is_account_exist=async(accountnumber)=>{
  let account=await accounts.findOne({businessid:accountnumber})
  if(account){
    console.log('account found',account)
    return account
  }
  else{
    return false
  }
}
let is_account_location_same=async(accountnumber,location)=>{
  let account=await accounts.findOne({bussinessnumber:accountnumber})
  if(account.location===location){
    return true
  }
  else{
    return false
  }
}
module.exports={
    is_account_exist,
    is_account_location_same
}
// Compare this snippet from backend/middlewares/radar.js:
