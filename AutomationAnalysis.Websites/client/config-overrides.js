const paths = require("./paths");

module.exports = {
  webpack: function (config, env) {
    return config;
  },
  paths: function (originalPaths, env) {
    return originalPaths;
  },
  devServer: function (configFunction) {
    return function (proxy, allowedHost) {
      // Create the default config by calling configFunction with the proxy/allowedHost parameters
      const config = configFunction(proxy, allowedHost);
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
