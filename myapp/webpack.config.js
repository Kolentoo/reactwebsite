var path = require("path");
var webpack = require('webpack');
module.exports = {
  entry: { app: ['/src/index.js'] },
  output: {
    path: path.resolve(__dirname, "./build"),
    publicPath: "http://127.0.0.1:8080/build/",
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['','.js','.jsx']
  },  
  module: {
    loaders: [
      {test:/\.jsx$/, loaders:['jsx?harmony']}
    ],
    //使用ES6时，才需要添加此loaders
    loaders:[
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: ROOT_PATH,
        query: {
          //添加两个presents 使用这两种presets处理js或者jsx文件
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  plugins: [
    new webpack.DefinePlugin({
    'process.env.NODE.ENV':"development"
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};