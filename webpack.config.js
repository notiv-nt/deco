const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  stats: 'minimal',
  context: __dirname,
  devtool: 'inline-source-map',
  mode: process.env.NODE_ENV,

  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'assets/js/[name].js',
    chunkFilename: 'assets/js/[name].[id].js',
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      vue$: 'vue/dist/vue.esm.js',
    },

    extensions: ['.mjs', '.js', '.vue'],
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },

      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: ['@babel/plugin-syntax-dynamic-import'],
            },
          },
        ],
      },

      {
        test: /\.css$/,
        use: [{ loader: 'vue-style-loader' }, { loader: 'css-loader', options: { sourceMap: true } }],
      },

      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'vue-style-loader' },
          { loader: 'css-loader', options: { sourceMap: true } },

          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('postcss-transition')({
                  duration: 'var(--transition-duration)',
                  timingFunction: 'var(--transition-function)',
                }),

                require('postcss-media-functions')({
                  sizes: {
                    sm: '576px',
                    md: '768px',
                    lg: '992px',
                    xl: '1200px',
                  },
                }),

                require('postcss-fluid'),

                require('autoprefixer')({
                  overrideBrowserslist: '> 0.25%, not ie 11, not dead, not samsung < 9, not ios_saf < 12',
                }),

                require('postcss-clean')({
                  level: {
                    1: {
                      specialComments: 0,
                    },
                  },
                }),
              ],
            },
          },

          {
            loader: 'sass-loader',
            options: {
              prependData: "@import 'src/styles/template-require';",
              sourceMap: true,
            },
          },

          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('postcss-media-functions').generateVariables({
                  sizes: {
                    sm: '576px',
                    md: '768px',
                    lg: '992px',
                    xl: '1200px',
                  },
                }),
              ],
              parser: 'postcss-scss',
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new VueLoaderPlugin(),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.template.html'),
      filename: 'index.html',
    }),

    new Dotenv(),

    new CopyPlugin([{ from: path.resolve('public'), to: './assets' }]),
  ],

  devServer: {
    port: 9090,
    historyApiFallback: true,
    clientLogLevel: 'silent',
  },
};
