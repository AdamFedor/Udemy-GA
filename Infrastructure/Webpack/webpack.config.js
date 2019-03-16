const path = require('path')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        // contentBase: path.join(__dirname,'dist'),
        // compress: true,
        port: 8080
        // hot: true
    },
    entry: {
        myEntry: './src/index.js'
        // For code split - using the below files instead
        // first: './js/first.js',
        // second: './js/second.js',
        // third: './js/third.js',
        // css: './css/main.css'
    },
    output: {
        filename: '[name].bundle.[hash].js',
        path: path.resolve(__dirname,'dist')
    },
    module: {
        rules: [
            // {
            // // Disabled for mini-css-extract-plugin
            //     test: /\.css$/,
            //     use: ['style-loader', 'css-loader']
            // },
            {
                test:/\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: 'myPrefix.[name].[ext]',
                    outputPath: 'images/',
                    publicPath:'./images/'
                }
            }
        ]
    },
    plugins: [
        // new webpack.ProvidePlugin({
        //     // where globals may be put via shimming
        //     $:'jquery' // declaring jQuery as the dollar sign
        // })
        // new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/mycss.[name].css"
        }),
        new cleanWebpackPlugin(),
        new htmlWebpackPlugin({
            title: 'html webpack plugin',
            filename: "myIndex.html",
            template: './index.html'
        })
    ]
}