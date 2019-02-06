const app = require("./bin/WWW");

//app.get("port")
app.listen(80, () => {
  console.log(`Server's working on port 80`);
});
