const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    //动态获取路径
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    //只有配置了 publicPath ，大图片才能正常显示，否则不会。
    publicPath: 'dist/',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // 注意这里的顺序是反的，不是正的，是从后向前加载的，css-loader是读取用的,style-loader是解析用的
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                strictMath: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 当加载的图片，小于Limit时，会将图片编译成base64的字符串形式。
              limit: 12500,
              name: 'img/[name].[hash:8].[ext]',
            },
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
    ],
  },
  resolve: {
    // 如果在这里面配置了，就可以不用在引用时指定 '/vue/App.vue'了，而可以直接用 '/vue/App' 了
    extensions: ['.js', '.css', '.vue'],
    // 别名
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
}
