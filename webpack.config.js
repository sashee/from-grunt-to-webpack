const HtmlWebpackPlugin = require("html-webpack-plugin");

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
				loaders: ["react-hot", "babel-loader?presets[]=es2015&presets[]=react"]
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
