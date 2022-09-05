let User = require('../db/schemas/Userschema');

let checkaccountbalance = async (userid, amount) => {
    let user = await User.findOne({ userid: userid });
    console.log(user.finanaces.blance , amount);
    if (user.finanaces.blance > amount) {
        return true;
    } else {
        return false;
    }
}

module.exports = checkaccountbalance;