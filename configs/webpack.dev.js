import path from 'path'
import webpack from 'webpack'

let SRC = path.resolve(__dirname, '../src');
let PUBLIC = path.resolve(__dirname, '../public');
let PORT = 8080;

let config = {
    entry: {
        app: [path.resolve(SRC, 'index.jsx'), `webpack-dev-server/client?http://localhost:${PORT}/`, "webpack/hot/dev-server"]
    },
    output: {
        path: PUBLIC,
        publicPath: '../public',
        filename: '[name].bundle.js',
    },
    devtool: 'source-map',
    devServer: {
        inline: true,
    },
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
            },
            {
                test: /\.(svg|eot|ttf|otf|woff2?)$/,
                exclude: /node_modules/,
                loaders: ['file']
            }
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
};

export {config, PORT, SRC, PUBLIC};

