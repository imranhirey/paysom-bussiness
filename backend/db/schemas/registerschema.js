const mongoose = require("mongoose");
const schema = mongoose.Schema;


const regstrationSchema = new schema({
  businessid: { type: String, required: true },
  businessname: { type: String, required: true },
  businessaddress: { type: String, required: true },
  business_registration_number: { type: String },
  businessphone: { type: String, required: true },
  businessemail: { type: String, required: true },
  businesswebsite: { type: String, required: true },
  businessdescription: { type: String, required: true },
  business_owner_name: { type: String, required: true },
  refrences: { type: Object },
  payout: { type: Array },
  business_logo: { type: String },
  customers: { type: Array },
  business_status: { type: String },
  business_type: { type: String },
  business_category: { type: String },
  businesspassword: { type: String },
  

  
});
module.exports = mongoose.model("bussines-accounts", regstrationSchema);
