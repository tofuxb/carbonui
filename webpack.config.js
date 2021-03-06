var webpack = require('webpack')
var path = require('path')

module.exports = {
	entry: {
		'carbonui': './components/index.js'
	},

	output: {
		filename: './dist/[name].js',
		library: 'CarbonUI',
		libraryTarget: 'umd'
	},

	module: {
		loaders: [
			{test: /\.vue$/, loader: 'vue'},
			{test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
		]
	},

	babel: {
	    presets: ['es2015', 'stage-0'],
	    plugins: ['transform-runtime']
	}
}