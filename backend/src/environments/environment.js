const DevEnvironment = require("./environment.dev");
const ProdEnvironment = require("./environment.prod");

function getEnvironmentVariables() {
    // console.log("NODE_ENV:", process.env.NODE_ENV);
    if (process.env.NODE_ENV === "production") {
        // console.log("Using production environment");
        return ProdEnvironment;
    }
    // console.log("Using development environment");
    return DevEnvironment;
}


module.exports = { getEnvironmentVariables };
