var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry   : "./main.jsx",
    output  : {
        path        : __dirname,
        filename    : 'index.js'
    },
    devServer : {
        inline  : true,
        port    : 8080
    },
    module : {
        loaders : [
            {
                test    : /\.jsx?$/,
                exclude : /node_modules/,
                loader  : 'babel',
                query   : {
                    presets : ['es2015','react']
                }
            }
        ]
    }
}