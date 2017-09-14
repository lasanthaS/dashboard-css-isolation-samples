const path = require('path');
const webpack = require('webpack');
module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: {
        index: './WidgetA.jsx',
    },
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'WidgetA.js',
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                }],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            presets: ['es2015', 'react'],
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpg|svg|cur|gif|eot|svg|ttf|woff|woff2)$/,
                use: ['url-loader'],
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'],
                },
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules=true&localIndentName=[name]__[local]___[hash:base64:5]'
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader',
                }, {
                    loader: 'css-loader',
                }, {
                    loader: 'sass-loader',
                }],
            },

        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            'React': 'react',
            'ReactDOM': 'react-dom'
        })
    ],
    resolve: {
        extensions: ['.js', '.json', '.jsx', '.scss'],
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        publicPath: '/dist/',
    },
};
