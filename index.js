const app = require("./bin/WWW");

app.listen(app.get("port"), () => {
  console.log(`Server's working on port ${app.get("port")}`);
});
