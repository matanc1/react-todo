let path = require('path');

let BUILD_DIR = path.resolve(__dirname, 'src/client/build');
let APP_DIR = path.resolve(__dirname, 'src/client/app');

let config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        publicPath: BUILD_DIR,
        filename: 'bundle.js',
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css?$/,
                exclude: /node_modules/,
                loaders: ['style-loader', 'css-loader?sourceMap']
            }
        ],
    },
};
module.exports = config;
