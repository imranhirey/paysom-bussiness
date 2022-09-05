const mongoose = require("mongoose");
const schema = mongoose.Schema;

const regstrationSchema = new schema({
  name: {
    type: String,
  },
  cus_id:String,
  payment_methods:{
    type:Array
  },
  email: {
    type: String,
  },
  phone_number: {
    type: String,
  },
  password: {
    type: String,
  },
  contacts:{
    type:Array
  },
  subscribtions:{
    type:Array
  },
  birthdate:{
    type:Date
  },
  refrences: {
    type: Object,
  },
  finanaces:{
   type:Object
  },
  security:{
 type:Object
  },
  history: {
    in: {
      type: Number,
    },
    out: {
      type: Number,
    },
  },
});
module.exports = mongoose.model("Users", regstrationSchema);
