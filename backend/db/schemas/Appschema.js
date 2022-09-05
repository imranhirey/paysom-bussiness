const mongoose = require("mongoose");
const schema = mongoose.Schema;


const Appregisterschema = new schema({
  appname: { type: String, required: true },
  appowner: { type: String, required: true },
  appendpoint: { type: Object, required: true },
  appsecretssecrets: { type: Object },
  appid: { type: String, required: true },
  apprequests: { type: Array},
  appstatus: { type: String },
  appcreationdate: { type: String },
  

  
});
module.exports = mongoose.model("bussines-apps", Appregisterschema);
