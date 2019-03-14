const path = require('path')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        // contentBase: './dist',
        contentBase: path.join(__dirname,'dist'),
        compress: true,
        port: 3030
    },
    entry: {
        myEntry: './src/index.js'
    },
    output: {
        filename: '[name].bundle.[hash].js',
        path: path.resolve(__dirname,'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
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
        new cleanWebpackPlugin(),
        new htmlWebpackPlugin({
            title: 'html webpack plugin',
            filename: "myIndex.html",
            template: './index.html'
        })
    ]
}