var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',

    entry: './src/index.js',
    output: {
        chunkFilename: 'vendor.bundle.js',
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, '/static'),
        publicPath: '/'
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        }
    },
    devServer: {
        port: 8000,
        contentBase: 'static',
        historyApiFallback: true,
        proxy: {
            '/api*': {
                target: 'http://localhost:3000'
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'static/index.html'
        })
    ]
};
