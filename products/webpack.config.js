const HTMLWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 3001,
  },
  plugins: [
		new ModuleFederationPlugin({
			name: 'products',
			filename: 'remoteProductsList.js',
			exposes: {
				'./ProductsList': './src/index'
			}
		}),
    new HTMLWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
