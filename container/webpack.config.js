const HTMLWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
	mode: 'development',
	devServer: {
		port: 3000,
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'container',
			remotes: {
				products: 'products@http://localhost:3001/remoteProductsList.js',
			}
		}),
		new HTMLWebpackPlugin({
			template: './public/index.html'
		})
	]
}
