module.exports = {
  mode: "development",
  devtool: 'source-map',
  entry: ['./src/index.tsx'],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-react"]
          }
        }
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
        query: {
          declaration: false,
        }
      }
    ]
  },
  output: {
    filename: "bundle.js",
    path: __dirname + '/dist/',
    publicPath: '/dist/'
  }
}
