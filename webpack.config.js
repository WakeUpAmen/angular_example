var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function makeConfig() {
    var config = {};

    config.entry = "./src/app.js";
    config.output = {
        path: __dirname,
        filename: "bundle.js"
    };
    config.module = {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/},
            { test: /\.html$/, loader: "raw" }
        ]
    };
    config.plugins = [new HtmlWebpackPlugin({
			template: './src/index.html',
			inject: 'body'
			})
		     ]
    return config;
}();

