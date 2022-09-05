const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Subscriptionschema = new schema({
 
  sub_id:{
      type:String
  },
  type:{
    type:String

  },
  sub_name:{
    type:String


  },
  sub_amount:{
      type:Number
  },
    sub_status:{
        type:String
    },
    sub_start_date:{
        type:Date
    },

    sub_created_by:{
        type:Object
    },
    sub_payment_link:{
        type:String
    },
    sub_qr_code:{
        type:String
    },
    subscribers_count:{
        type:Number
    } // this is for the number of subscribers
    
});
module.exports = mongoose.model("Subscriptions", Subscriptionschema);
