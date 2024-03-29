const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
    entry: './src/scripts/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'scripts/index.js'
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9070
    },

    module: {
        rules: [
            {
                test: /icons\/.*\.svg$/,
                loader: 'svg-sprite-loader',
                options: {
                    extract: true,
                    spriteFilename: './icons/icons.svg',
                    runtimeCompat: true
                }
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),

        new MiniCssExtractPlugin({
            filename: 'styles/style.css',
        }),

        new SpriteLoaderPlugin({
            plainSprite: true
        }),
    ]
};