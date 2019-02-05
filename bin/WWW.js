const app = require("../app");

var port = normalizePort(process.env.PORT || "3000");
app.set("port", port);
