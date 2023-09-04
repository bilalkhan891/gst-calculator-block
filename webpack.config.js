const path = require("path");

module.exports = {
  entry: "./src/block.js", // Adjust the entry point based on your file structure
  output: {
    filename: "dist/block.js", // Output file location and name
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    alias: {
      "@wordpress/blocks": path.resolve(
        __dirname,
        "node_modules",
        "@wordpress/blocks"
      ),
      "@wordpress/components": path.resolve(
        __dirname,
        "node_modules",
        "@wordpress/components"
      ),
      "@wordpress/element": path.resolve(
        __dirname,
        "node_modules",
        "@wordpress/element"
      ),
    },
  },
};
