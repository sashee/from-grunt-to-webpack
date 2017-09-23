const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

var babelPresets = ["es2015", "react"];
if(process.env.NODE_ENV !== "production") {
	babelPresets.push("react-hmre");
}

module.exports = {
	entry: [path.join(__dirname, 'src/app.jsx')],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: "bundle.js"
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "src/index.html"
		})
	],
	module: {
		rules: [
			{
				test: /\.js[x]?$/,
				exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                ["latest", {"es2015": false}],
                "react",
              ],
              plugins: ['transform-class-properties']
            },
          }
        ]
      },
			{
				test: /.css$/,
				loader: "style-loader!css-loader"
			}
		]
	},
	devtool: "source-map",
};
