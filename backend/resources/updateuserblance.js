let User=require('../db/schemas/Userschema');

let updateuserblance=async(type,userid,amount)=>{
    // type can be 'add' or 'detuct' 
    let user=await User.findOne({cus_id:userid})
    let newblance=null;
    if(type=='add'){
        newblance=user.finanaces.blance+amount;
    }
    else if(type=='detuct'){
        newblance=user.finanaces.blance-amount;
    }
    else{
        throw new Error('type not found')
    }
    try {
        
        var myquery = { cus_id: userid };
        var newvalues = {
          $set: { "finanaces.blance": newblance },
        };
        let res=await User.findOneAndUpdate(myquery, newvalues)
        return {
            status:'success',
            message:'user blance updated'
            
        }
    }
    catch(error){
        console.log(error.message);
        throw new Error('cant save it',error.message)
    }



}
module.exports=updateuserblance;