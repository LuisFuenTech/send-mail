const jwt = require("jwt-simple");
const moment = require("moment");
const secret = "you_can_control_your_smart_home";

exports.createToken = user => {
  const payload = {
    sub: user._id,
    name: user.name,
    surname: user.surname,
    email: user.email,
    username: user.username,
    iat: moment().unix(),
    exp: moment()
      .add(30, "days")
      .unix()
  };

  return jwt.encode(payload, secret);
};
