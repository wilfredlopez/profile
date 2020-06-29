const debug = process.env.NODE_ENV !== "production";

const withImages = require("next-images");
module.exports = withImages({
  esModule: true,
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/projects": { page: "/projects" },
      "/contact": { page: "/contact" },
    };
  },
  // assetPrefix: !debug ? "/profile/" : "",
  webpack(config, options) {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty",
    };
    config.module.rules = config.module.rules.map((rule) => {
      if (rule.loader === "babel-loader") {
        rule.options.cacheDirectory = false;
      }
      return rule;
    });
    return config;
  },
});
