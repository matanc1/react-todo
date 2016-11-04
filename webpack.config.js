var path = require('path');

var config = {
    context: path.join(__dirname, 'app'),
    entry: [
        './main.js'
    ],
    output: {
        path: path.join(__dirname, 'www'),
        filename: 'bundle.js'
      },
    resolveLoader: {
        root: [
            path.join(__dirname, 'node_modules')
        ]
      },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel']
              }
        ]
      },
    resolve: {
        root: [
            path.join(__dirname, 'node_modules')
        ]
      }
  };
module.exports = config;
