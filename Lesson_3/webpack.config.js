const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
// const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    // mode: 'development',
    entry: './src/js/index.js',
    output: {
        filename: 'bungle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        }),
        // new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),

    ],

    module: {
        rules: [{
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.mp4$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: './video',
                        useRelativePath: true

                    }

                }]
            },
            {
                test: /\.mp3$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: './music',
                        useRelativePath: true

                    }

                }]
            },
            {
                test: /\.(jpg|gif|svg|gif)$/,
                use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: './img',
                            useRelativePath: true

                        }

                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 70
                            }
                        }
                    }

                ]
            }
            
        ]
    },
    devServer: {
        port: 4300
    }
}