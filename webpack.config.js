let path = require('path');

let BUILD_DIR = path.resolve(__dirname, 'src/client/build');
let APP_DIR = path.resolve(__dirname, 'src/client/app');

let config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
      },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
          },
        ],
      },
  };


module.exports = config;
