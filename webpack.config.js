const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');
const distFolder =  path.resolve(__dirname, "dist");
// const resources =  path.resolve(__dirname, "dist","resources");
module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/i,
        type: "asset/resource",
      },
      
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from:  "resources/**/*.html",
          to:distFolder
        },
      ],
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`

      // For `html-minifier-terser`:
      //
      new HtmlMinimizerPlugin(),

      // For `@swc/html`:
      //
      // HTML documents - HTML documents with `Doctype` and `<html>/`<head>`/`<body>` tags
      //
      // Options - https://github.com/swc-project/bindings/blob/main/packages/html/index.ts#L5
      //
      // new HtmlMinimizerPlugin({
      //   minify: HtmlMinimizerPlugin.swcMinify,
      //   minimizerOptions: {}
      // })
      //
      //
      // HTML fragments - HTML fragments, i.e. HTML files without doctype or used in `<template>` tags or HTML parts which injects into another HTML parts
      //
      // Options - https://github.com/swc-project/bindings/blob/main/packages/html/index.ts#L38
      //
      // new HtmlMinimizerPlugin({
      //   minify: HtmlMinimizerPlugin.swcMinifyFragment,
      //   minimizerOptions: {}
      // })
    ],
  },
};