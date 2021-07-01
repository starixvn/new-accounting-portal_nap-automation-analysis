const paths = require("./paths");

process.env.HTTPS = "true";
process.env.SSL_CRT_FILE = paths.sslCert;
process.env.SSL_KEY_FILE = paths.sslKey;
process.env.NODE_EXTRA_CA_CERTS = paths.caRootCert;

module.exports = {
  webpack: function (config, env) {
    return config;
  },
  paths: function (originalPaths, env) {
    if (env === "production") {
      originalPaths.appBuild = paths.appBuild;
      originalPaths.publicPath = paths.publicPath;
    }

    return originalPaths;
  },
  devServer: function (configFunction) {
    return function (proxy, allowedHost) {
      // Create the default config by calling configFunction with the proxy/allowedHost parameters
      const config = configFunction(proxy, allowedHost);
      // Change the https certificate options to match your certificate, using the .env file to
      // set the file paths & passphrase.

      config.proxy = [
        {
          context: ["/api"],
          target: "https://localhost:44300",
          secure: false,
          logLevel: "debug",
          pathRewrite: {
            "/api": "/api",
          },
        },
      ];

      return config;
    };
  },
};
