const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({
  filename:  "css/[name].css"
  // filename:  ? "css/[name].[contenthash].css" : "css/[name].css"
});
module.exports = {
  entry: ["babel-polyfill",'./src/index.js'],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  
  module: {
    rules: [
      {
        test: /\.css$/,
        test: /(\.css|\.scss)$/,
        use: ['css-hot-loader'].concat(extractSass.extract({
        use: [{
        loader: "css-loader",
        options: { url: false }
        },
        ],
        // use style-loader in development
        fallback: "style-loader"
        })),
      }
    ],
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
     
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [ 
           // cleaning up the destination directory before writing new files        
           new CleanWebpackPlugin(['dist/***/**/*.css', 'dist/**/*.js', 'dist/**/*.js.*', 'dist/*.html']),        
            ],
  
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
};
