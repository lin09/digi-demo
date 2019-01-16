const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, argv) => {
  const devMode = argv.mode !== 'production'

  return {
    output: {
      publicPath: devMode ? '/' : '/digi-demo/dist/',
      filename: devMode ? 'bundle.js' : 'bundle.[hash].js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
    ],
    module: {
      rules: [{
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: { minimize: !devMode }
        }
      }]
    },
    devServer: {
      historyApiFallback: true
    }
  }
}