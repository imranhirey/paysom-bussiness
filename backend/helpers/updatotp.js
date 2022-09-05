let accounts = require('../db/schemas/registerschema')

let updateotp=async(email,newotp)=>{
    var newvalues = { $set: {'refrences.vercode':newotp} };
try {
    let res=await accounts.findOneAndUpdate({businessemail:email},newvalues)
    console.log(res)

} catch (error) {
    console.log(error.message)
    
}      
   

}

module.exports=updateotp;