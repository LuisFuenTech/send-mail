const jwt = require("jwt-simple");
const moment = require("moment");
const secret = "you_can_control_your_smart_home";

exports.ensureAuth = (req, res, next) => {
  if (!req.headers.authorization) {
    return res
      .status(403)
      .send({ Error: `Request doesn't have authorization header` });
  }

  const token = req.headers.authorization.replace(/['"]+/g, "");

  try {
    var payload = jwt.decode(token, secret);

    if (payload.exp <= moment().unix())
      return res.status(401).send({ Error: `Token has expired` });
  } catch (ex) {
    return res.status(401).send({ Error: `Token doesn't valid` });
  }

  req.user = payload;
  next();
};
