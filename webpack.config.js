const path = require("path");
const webpack = require("webpack");

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CSSExtract = new ExtractTextPlugin("styles.css");

process.env.NODE_ENV = process.env.NODE_ENV || "dev-server";

if (process.env.NODE_ENV === "test") {
  require("dotenv").config({ path: ".env.test" });
} else if (process.env.NODE_ENV === "dev-server") {
  require("dotenv").config({ path: ".env.development" });
}

module.exports = (env) => {
  const isProduction = env === "production";
  return {
    entry: "./public/src/app.js",
    output: {
      path: path.join(__dirname, "public"),
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /node_modules/,
        },
        {
          test: /\.s?css$/,
          use: CSSExtract.extract({
            use: ["css-loader", "sass-loader"],
          }),
        },
      ],
    },
    plugins: [
      CSSExtract,
      new webpack.DefinePlugin({
        "process.env.FIREBASE_API_KEY": JSON.stringify(
          process.env.FIREBASE_API_KEY
        ),
        "process.env.FIREBASE_AUTH_DOMAIN": JSON.stringify(
          process.env.FIREBASE_AUTH_DOMAIN
        ),
        "process.env.FIREBASE_DATABASE_URL": JSON.stringify(
          process.env.FIREBASE_DATABASE_URL
        ),
        "process.env.FIREBASE_PROJECT_ID": JSON.stringify(
          process.env.FIREBASE_PROJECT_ID
        ),
        "process.env.FIREBASE_STORAGE_BUCKET": JSON.stringify(
          process.env.FIREBASE_STORAGE_BUCKET
        ),
        "process.env.FIREBASE_MESSAGING_SENDER_ID": JSON.stringify(
          process.env.FIREBASE_MESSAGING_SENDER_ID
        ),
        "process.env.FIREBASE_APP_ID": JSON.stringify(
          process.env.FIREBASE_APP_ID
        ),
        "process.env.FIREBASE_MEASUREMENT_ID": JSON.stringify(
          process.env.FIREBASE_MEASUREMENT_ID
        ),
      }),
    ],

    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true,
    },
  };
};

//loader
