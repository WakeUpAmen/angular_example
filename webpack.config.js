module.exports = function makeConfig() {
    var config = {};

    config.entry = "./script.js";
    config.output = {
        path: __dirname,
        filename: "bundle.js"
    };
    config.module = {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    };
    return config;
}();

