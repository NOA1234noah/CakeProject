const indexR = require("./index");
const cakeR = require("./cake");
const userR = require("./user");
exports.routesInit = (app) => {
    app.use("/", indexR);
   app.use("/cake", cakeR);
    app.use("/user", userR);

}