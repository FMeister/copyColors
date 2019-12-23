const path = require("path");

module.exports = {
    mode: 'development',
    entry: "./src/JS/index.js",
    devtool:"inline-source-map",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules:[
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    watch: true,
    resolve: {
        extensions:[
            ".js"
        ]
    }

}