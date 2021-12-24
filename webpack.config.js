const webpack = require("webpack");
const Dotenv = require('dotenv-webpack');
const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    // Define the entry points of our application (can be multiple for different sections of a website)
    entry: {
        main: './src/js/main.js',
    },

    // Define the destination directory and filenames of compiled resources
    output: {
        filename: "js/[name].js",
        path: path.resolve(__dirname, "./dist")
    },

    // Define development options
    devtool: "source-map",

    // Define loaders
    module: {
        rules: [
            // Use babel for JS files
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env"
                        ]
                    }
                }
            },
            {
              test: /\.(pdf|gif|png|jpe?g|svg)$/,
              use: 'file-loader?name=[path][name].[ext]',
            },
            // CSS, PostCSS, and Sass
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 2,
                            sourceMap: true,
                            url: false,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    'autoprefixer',
                                ]
                            }
                        }
                    },
                    'sass-loader'
                ],
            },
        ],
    },
    target: 'node',

    // Define used plugins
    plugins: [
        // Load .env file for environment variables in JS
        new Dotenv({
            path: "./.env"
        }),

        // Extracts CSS into separate files
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "[id].css"
        }),
    ],
};