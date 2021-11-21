const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                        babelrc: false,
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    "targets": "> 0.25%, not dead"
                                }
                            ],
                            "@babel/preset-react"
                        ],
                        plugins: [
                            ...(isDevelopment ? ["react-refresh/babel"]:[]),
                            "@babel/transform-runtime",
                            "@babel/plugin-proposal-class-properties"
                        ]
                    }
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                    }
                ]
            },
            {
                test: /\.(s[ac]ss|css|)$/i,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: isDevelopment
                        }
                    },
                    {
                        loader: 'resolve-url-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: isDevelopment
                        }
                    }
                ],
            },
            {
                test: /\.(less)$/i,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'resolve-url-loader'
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            },
            {
                test: /\.(svg|png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'images',
                },
            },
        ],
    },
    plugins: [
        ...(isDevelopment ? [new webpack.HotModuleReplacementPlugin()]:[]),
        ...(isDevelopment ? [new ReactRefreshWebpackPlugin()]:[])
    ],
    resolve: {extensions: ["*", ".js", ".jsx"]},
    output: {
        filename: "[name].bundle.js",
        publicPath: "/dist/",
        path: path.resolve(__dirname, "dist/"),
    },
};
