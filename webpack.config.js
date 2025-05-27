const path = require("path");
const webpack = require("webpack");
const glob = require("glob");

/*
 * Webpack Plugins
 */
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const ProductionPlugins = [
  // production webpack plugins go here
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify("production"),
    },
  }),
];

const debug =
  process.env.NODE_ENV === "production" ? "production" : "development";
const rootAssetPath = path.join(__dirname, "assets");

module.exports = {
  // configuration
  context: __dirname,
  entry: {
    ...glob
      .sync("./eve_multitool/*/assets/**/*.{ts,js,css,vue}")
      .reduce((acc, filePath) => {
        const filename = path.basename(filePath);
        const ext = path.extname(filePath).slice(1);
        const entryName = `${path.basename(filePath, path.extname(filePath))}_${ext}`;
        acc[entryName] = path.resolve(__dirname, filePath);
        return acc;
      }, {}),
    main_js: "./assets/js/main",
    main_css: [
      path.join(
        __dirname,
        "node_modules",
        "@fortawesome",
        "fontawesome-free",
        "css",
        "all.css",
      ),
      path.join(
        __dirname,
        "node_modules",
        "bootstrap",
        "dist",
        "css",
        "bootstrap.css",
      ),
      path.join(__dirname, "assets", "css", "style.css"),
    ],
  },
  mode: debug,
  output: {
    chunkFilename: "[id].js",
    filename: "[name].bundle.js",
    path: path.join(__dirname, "eve_multitool", "static", "build"),
    publicPath: "/static/build/",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css", ".vue"],
    alias: {
      vue: "@vue/runtime-dom",
    },
  },
  devtool: debug ? "eval-source-map" : false,
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].bundle.css" }),
    new webpack.ProvidePlugin({ $: "jquery", jQuery: "jquery" }),
  ].concat(debug ? [] : ProductionPlugins),
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          "css-loader!less-loader",
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          "css-loader",
        ],
      },
      { test: /\.html$/, type: "asset/source" },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        type: "asset/resource",
        mimetype: "application/font-woff",
      },
      {
        test: /\.(ttf|eot|svg|png|jpe?g|gif|ico)(\?.*)?$/i,
        type: "asset/resource",
        generator: {
          filename: "[name][ext]",
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { presets: ["@babel/preset-env"], cacheDirectory: true },
      },
      { test: /\.tsx?$/, exclude: /node_modules/, use: "ts-loader" },
    ],
  },
};
