const path = require("path");

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CSSExtract = new ExtractTextPlugin("styles.css");

module.exports = env => {
  const isProduction = env === "production";
  return {
    entry: "./public/src/app.js",
    output: {
      path: path.join(__dirname, "public"),
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          test: /\.s?css$/,
          use: CSSExtract.extract({
            use: ["css-loader", "sass-loader"]
          })
        }
      ]
    },
    plugins: [CSSExtract],
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true
    }
  };
};

//loader
