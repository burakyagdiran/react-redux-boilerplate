const path = require("path");
const HtmlWebPackPlugin = require('html-webpack-plugin');

    module.exports = {
        entry: './src/index.js',
        output: {
            path: path.join(__dirname, '/dist'),
            filename: 'index_bundle.js',
        },
    module: {
        rules: [
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
    ]
}