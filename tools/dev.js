import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server'
import {config, SRC, PORT} from '../configs/webpack.dev.js'
import nodemon from 'nodemon'

var compiler = webpack(config);

var server = new WebpackDevServer(compiler,{
    contentBase: SRC,
    hot: true,
    stats: {
        colors: true,
    },
    proxy: {
        '/get/data': {
            target: 'http://localhost:3000',
        },
        '/send/data': {
            target: 'http://localhost:3000',
        },
        '/delete': {
            target: 'http://localhost:3000',
        }
    }
});
server.listen(PORT);

nodemon("--watch server server/server.js");
