const HtmlWebpackPlugin = require("html-webpack-plugin");

var babelPresets = ["es2015", "react"];
if(process.env.NODE_ENV !== "production") {
	babelPresets.push("react-hmre");
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
				loaders: ["babel-loader?" + babelPresets.map((preset) => `presets[]=${preset}`).join("&")]
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
