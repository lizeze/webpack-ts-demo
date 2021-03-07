const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode:"development",
    entry: './src/index.ts',
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }, ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Output Management',
        }),
      ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },devServer: {
        contentBase: './dist',
      },
};