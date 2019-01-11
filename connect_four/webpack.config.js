const path = require("path");

module.exports = {
  entry: "./client/src/app.jsx",
  output: {
    path: path.resolve(__dirname, "client/dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
