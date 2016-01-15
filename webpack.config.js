const HtmlWebpackPlugin = require("html-webpack-plugin");

var babelLoaders = "presets[]=es2015&presets[]=react";
if(process.env.NODE_ENV !==	"production") {
	babelLoaders += "&presets[]=react-hmre";
}

module.exports = {
	entry: "./src/app.jsx",
	output: {
		path: "dist",
		filename: "bundle.js"
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "src/index.html"
		})
	],
	module: {
		loaders: [
			{
				test: /\.js[x]?$/,
				exclude: /node_modules/ ,
				loaders: ["babel-loader?" + babelLoaders]
			},
			{
				test: /.css$/,
				loader: "style-loader!css-loader"
			}
		]
	},
	devtool: "source-map",
	debug: true
};
