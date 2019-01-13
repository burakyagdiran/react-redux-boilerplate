require("babel-polyfill");
const path = require("path");
const Package = require("./package.json");
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: "source-map",
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
        chunkFilename: 'app.bundle.' + Package.version + '.js',
    },
    devServer: {
        historyApiFallback: true,
        port: 3000,
        inline: true,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: true },
                    },
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            },
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [{ loader: 'file-loader', options: {} }],
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './index.html',
            filename: 'index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
}