let Account=require('../db/schemas/registerschema')

let Updatebussinessblance=async(type,bussinessid,amount)=>{
    // type can be 'add' or 'detuct' 
    console.log(type,bussinessid,amount)
    let bussiness=await Account.findOne({buss:bussinessid})
    console.log('bussinska',bussiness)
    let newblance=null;
    if(type=='add'){
        newblance=bussiness.refrences.blance+amount;
    }
    else if(type=='detuct'){
        newblance=bussiness.refrences.blance-amount;
    }
    else{
        throw new Error('type not found')
    }
    try {
        
        var myquery = { cus_id: bussinessid };
        var newvalues = {
          $set: { "refrences.blance": newblance },
        };
        let res=await Account.findOneAndUpdate(myquery, newvalues)
        return {
            status:'success',
            message:'bussiness blance updated'
            
        }
    }
    catch(error){
        console.log(error.message);
        throw new Error('cant save it',error.message)
    }

}
module.exports=Updatebussinessblance;