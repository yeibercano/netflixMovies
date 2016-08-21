const path = require('path')

module.exports = {
  context: __dirname,
  entry: './js/ClientApp.js',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  resolve: {
    //start from left to write
    extensions: ['', '.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true, // tells what happen
    chuncks: false
  },
  module: {
    loaders: [
      {
        test:/\.jsx?$/,
        loader: 'babel-loader'
      }

    ]
  }
}

