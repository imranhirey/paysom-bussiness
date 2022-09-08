let Accounts = require("../../db/schemas/registerschema");
let subscriptions = require("../../db/schemas/Subscriptionschema");
let Intents = require("../../db/schemas/intentsschema");
let router = require("express").Router();

// new subscriprs for a bussiness in this month
router.get("/subscribtions/:businessId", async function (req, res, next) {
  // new subscribers for a bussiness in this month
  let { businessId } = req.params;
  // find the business in the database
  // ok now we have the business account in the account variable now we need to find the subscriptions that belongs to this business
  let subscription = await subscriptions.find({
    "sub_created_by.bussiness_number": businessId,
  });
  // get the subscriptions that are created in this month
  // map the subscriptions to get the created date
  if (subscription) {
    let newSubscriptionsThismonth = subscription.map((sub) => {
      let startedDate = new Date(sub.sub_start_date);
      let currentMonth = new Date().getMonth();
      let startedMonth = startedDate.getMonth();
      if (startedMonth == currentMonth) {
        return sub;
      }
    });
    // get new subscribtions today
    let newSubscriptionsToday = newSubscriptionsThismonth.map((sub) => {
      let startedDate = new Date(sub.sub_start_date);
      let currentDay = new Date().getDay;
      let startedDay = startedDate.getDay();
      if (startedDay == currentDay) {
        return sub;
      }
    });
    // get the subscribtion that are created in this week
    let newSubscriptionsThisWeek = newSubscriptionsThismonth.map((sub) => {
      let startedDate = new Date(sub.sub_start_date);
      let currentWeek = new Date().getWeek;
      let startedWeek = startedDate.getWeek();
      if (startedWeek == currentWeek) {
        return sub;
      }
    });

    res.send({
      status: "success",
      message: "new subscribers for this month and today",
      newsubscribersthismonth: newSubscriptionsThismonth,
      newsubscriberstoday: newSubscriptionsToday,
      newsubscribersthisweek: newSubscriptionsThisWeek,
    });
  } else {
    res.send({
      status: "error",
      message: "no subscribtion are found",
    });
  }
});
// intents
router.get("/intents/:bussinessid", async (req, res) => {
  let { bussinessid } = req.params.bussinessid;
  // findall the intents that are created by this bussiness
  let intents = await Intents.find({
    "intent_created_by.bussiness_number": bussinessid,
  });
  if (intents) {
    console.log(intents);
    // unpaid intents
    let getunpaidintents = intents.map((intent) => {
      // get the intents who the status is unpaid
      if (intent.status == "unpaid") {
        return intent;
      }
    });
    // paid intents
    let getpaidintents = intents.map((intent) => {
      if (intent.status == "paid") {
        return intent;
      }
    });
    // get the intents that are created in this month
    let getintentscreatedthismonth = intents.map((intent) => {
      let createdDate = new Date(intent.created_at);
      let currentMonth = new Date().getMonth();
      let createdMonth = createdDate.getMonth();
      if (createdMonth == currentMonth) {
        return intent;
      }
    });

    res.send({
      status: "success",
      message: "all intents",
      unpaidintents: getunpaidintents,
      paidintents: getpaidintents,
      intentscreatedthismonth: getintentscreatedthismonth,
    });
  } else {
    res.send({
      status: "error",
      message: "no intents are found",
    });
  }
});

module.exports = router;
