var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");



var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  //plugins
    plugins: [
    new HtmlWebpackPlugin({
   		template: './src/client/index.html'
    })
   
    ],
    //disable minifying
  /*  optimization:{
    	minimizer:[ new UglifyJsPlugin({
 		  uglifyOptions: {
            compress:false,
        }
	})
    	]
    },*/
    optimization:{
    	minimize:false
    },

  //dev-server
  devServer: {
    contentBase: './src/client/public'
  },
  //babel loader
  module : {
    rules : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  }
};

module.exports = config;
