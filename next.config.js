const withImages = require("next-images");
module.exports = withImages({
  esModule: true,
  // useFileSystemPublicRoutes: false,
  distDir: "dist",
  webpack(config, options) {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty",
    };
    return config;
  },
});
