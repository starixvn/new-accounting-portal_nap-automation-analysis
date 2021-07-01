"use strict";

const path = require("path");
const fs = require("fs");

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

// config after eject: we're in ./config/
module.exports = {
  appBuild: resolveApp("../wwwroot/app"),
  publicPath: "wwwroot/app/",
  sslKey: resolveApp("config/key.pem"),
  sslCert: resolveApp("config/cert.pem"),
  caRootCert: resolveApp("config/rootCA.pem")
};
