// creating transaction
// trx_id,who,time_stamp,trx_type,amount

const TransactionsSchema = require("../db/schemas/TransactionsSchema");
let connectdatabase = require('../db/connects');
const makeid = require("../helpers/makeid")
connectdatabase

let createtransaction=async(data)=>{
    console.log('createing transaction ....')
    let trx_info=data
    var currentdate = new Date(); 
     var datetime =  currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    let trx_id=makeid(12)
    let trx_obj={
        trx_id:trx_id,
        time_stamp:datetime,
        amount:trx_info.ammount,
        from:trx_info.from,
        to:trx_info.to,
        trx_type:'intent payment',
    }
    let transaction= new TransactionsSchema({
        trx_id:trx_obj.trx_id,
        timestamp:trx_obj.time_stamp,
        amount:trx_obj.amount,
        from:trx_obj.from,
        to:trx_obj.to,
        type:trx_obj.trx_type
    })
    try {
        await transaction.save()
        return trx_id
        
    } catch (error) {
        throw new Error('cant save it')
        
    }
    
   
    

}
module.exports=createtransaction