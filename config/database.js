const app = require("../bin/WWW");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/smarthome", {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Connected to database");
    app.listen(app.get("port"), () => {
      console.log(`Server's working on port ${app.get("port")}`);
    });
  })
  .catch(err => {
    console.log(`Can't connect to database: ${err}`);
  });

module.exports.mongoose = mongoose;
