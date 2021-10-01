const prod = process.env.NODE_ENV === 'production';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
	mode: prod ? 'production' : 'development',
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				resolve: {
					extensions: ['.ts', '.tsx', '.js', '.json'],
				},
				use: 'ts-loader',
			},
			{
				test: /\.s[ac]ss$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
		],
	},
	devtool: prod ? undefined : 'source-map',
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			hash: true,
			inject: true,
		}),
		new MiniCssExtractPlugin(),
	],
	devServer: {
		historyApiFallback: true,
	},
};
