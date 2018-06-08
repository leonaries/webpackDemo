var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
    //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
    entry: APP_PATH,
    //输出的文件名 合并以后的js会命名为bundle.js
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    //添加我们的插件 会自动生成一个html文件
    // npm install html-webpack-plugin --save-dev
    plugins: [
        new HtmlwebpackPlugin({
            title: 'Hello World app'
        })
    ],
    //新建一个开发服务器 npm install webpack-dev-server －g
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
    },
    //css-loader会遍历css文件，找到所有的url(...)并且处理。
    // style-loader会把所有的样式插入到页面的一个style tag中。
    //npm install css-loader style-loader --save-dev
    loaders: [
        {
            test: /\.css$/,
            loaders: ['style', 'css','sass'],
            include: APP_PATH
        },
        {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=40000'
        },
        {
            test: /\.jsx?$/,
            loader: 'babel',
            include: APP_PATH,
            query: {
                presets: ['es2015']
            }
        },
    ]
};