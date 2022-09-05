const mongoose = require("mongoose");
const schema = mongoose.Schema;

const TransactionsSchema = new schema({
 
  trx_id:{
      type:String
  },
  type:{
    type:Object

  },
  timestamp:{
      type:String
  },
  amount:{
      type:String
  },
  from:{
      type:Object

  },
  to:{
      type:Object

  }
});
module.exports = mongoose.model("Transactions", TransactionsSchema);
