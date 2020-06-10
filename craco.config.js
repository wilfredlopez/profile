const {
  getLoader,
  loaderByName,
  throwUnexpectedConfigError,
} = require("@craco/craco")

module.exports = {
  webpack: {},
  plugins: [
    {
      plugin: {
        overrideWebpackConfig: ({ context, webpackConfig }) => {
          const { isFound } = getLoader(
            webpackConfig,
            loaderByName("file-loader"),
          )

          if (!isFound) {
            throwUnexpectedConfigError({
              message: `Can't find file-loader in the ${context.env} webpack config!`,
            })
          }

          return webpackConfig
        },
      },
    },
  ],
}
