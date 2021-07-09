module.exports = {
  webpack: function (config, env) {
    return config;
  },
  paths: function (originalPaths, env) {
    return originalPaths;
  },
  jest: function (config) {
    if (!config.testPathIgnorePatterns) {
      config.testPathIgnorePatterns = [];
    }

    config.coverageDirectory = "coverage";
    config.collectCoverageFrom = [
      "src/**/*.{ts,tsx}",
      "!src/**/*.d.ts",
      "!src/index.tsx",
      "!src/serviceWorker.ts",
    ];
    config.coveragePathIgnorePatterns = [
      "./src/*/*.types.{ts,tsx}",
      "./src/index.tsx",
      "./src/serviceWorker.ts",
      "./src/reportWebVitals.ts",
    ];
    config.coverageReporters = ["json", "text", "lcov", "clover"];
    config.coverageThreshold = {
      global: {
        statements: 95,
        branches: 95,
        lines: 95,
        functions: 95,
      },
    };
    config.snapshotSerializers = ["enzyme-to-json/serializer"];
    config.moduleFileExtensions = ["js", "json", "jsx", "ts", "tsx", "node"];
    config.moduleNameMapper = {
      "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
      "src/(.*)$": "<rootDir>/src/$1",
    };

    config.transformIgnorePatterns = [
      "[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$",
      "^.+\\.module\\.(css|sass|scss)$",
    ];
    return config;
  },
  devServer: function (configFunction) {
    return function (proxy, allowedHost) {
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
