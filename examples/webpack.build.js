var webpack = require('webpack')
var path = require('path')
var EnvPlugin = new webpack.DefinePlugin({
    'process.env': {
        'NODE_ENV': JSON.stringify('production')
    }
})
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var UglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
    compressor: {
        warnings: false
    }
})

module.exports = {

  entry: path.join(__dirname, 'main.js'),

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[hash].bundle.js',
    },

    plugins: [EnvPlugin, UglifyJsPlugin, new ExtractTextPlugin('[name].css')],

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
            { test: /\.vue$/, loader: 'vue'},
            { test: /\.less$/, loader: 'style-loader!css-loader!postcss-loader' },
            { test: /\.(png|jpg|gif)$/, loader: 'file?name=[name].[ext]?[hash]' }
        ]
    },

    babel: {
        presets: ['es2015', 'stage-0'],
        plugins: ['transform-runtime']
    },

    resolve: {
        alias: {
            'carbonui': path.join(__dirname, '..', 'components')
        }
    }
}