const port = process.env.PORT || 3000;
const dbPort = process.env.DB_PORT || 27017;
const dbUrl = process.env.MONGODB_URL || "mongodb://localhost:27017/smarthome";
const dbCollection = process.env.DB_COLLECTION || "smarthome";
const app = require("../bin/WWW");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://fuentech:Atlasfuentech2018@mycluster-aeuut.mongodb.net/test?retryWrites=true",
    {
      useNewUrlParser: true
    }
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(port, () => {
      console.log(`Server's working on port ${port}`);
    });
  })
  .catch(err => {
    console.log(`Can't connect to database: ${err}`);
  });

module.exports = {
  mongoose
};
