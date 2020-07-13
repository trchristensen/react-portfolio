const path = require("path");
const UnusedWebpackPlugin = require("unused-webpack-plugin");

module.exports = {
  // webpack configuration
  plugins: [
    ...otherPlugins,
    new UnusedWebpackPlugin({
      // Source directories
      directories: [path.join(__dirname, "src")],
      // Exclude patterns
      exclude: ["*.test.js"],
      // Root directory (optional)
      root: __dirname,
    }),
  ],
};
 