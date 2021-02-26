const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {

    mode: "production",

    entry: './src/index.js',
    resolve: {
        extensions: ['.js']
    },

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public')
    },

    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            template: './src/index.html',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            inject: 'body',
            template: './src/about.html',
            filename: 'about.html'
        }),
        new HtmlWebpackPlugin({
            inject: 'body',
            template: './src/projects.html',
            filename: 'projects.html'
        }),
        new HtmlWebpackPlugin({
            inject: 'body',
            template: './src/contact.html',
            filename: 'contact.html'
        }),
        new CopyPlugin({
            patterns: [
              { from: __dirname + "/src/assets", to: "assets" },
            ],
          }),
        ],
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000,
        historyApiFallback: true
    }
};