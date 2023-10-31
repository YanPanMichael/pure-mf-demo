const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path")

const {ModuleFederationPlugin} = require("webpack").container

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "./main_[contentpath].js"
    },
    mode: "production",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        new ModuleFederationPlugin({
            name: "app01",
            filename: "remoteEntry.js",
            exposes: {
                './Header': './src/header.js'
            }
        })
    ],
    devServer: {
        port: 8081
    }
}