const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
	// development开发模式
    mode: 'production',
    // 入口文件, webpack4 默认是如下配制,因此在开发过程中,您可以省略此处
    entry: './src/index.js',
    output: {
        // 输出生成主 js 名称,默认为 main.js
        filename: '[name].boundle.js',
        // 打包生成目录
        path: path.resolve(__dirname, 'dist'),
    },
	plugins: [
		new HtmlWebPackPlugin({
			// 源模板文件
			template: path.join(__dirname, './src/index.html'),
			// 生成在内存中的名称
			filename: 'index.html'
		})
	],
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    resolve: {
        // 修改自动解析扩展文件
        // 需要注意的是,修改后会覆盖默认的: ['.wasm','.mjs','.js','.json']
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            // 使用 @ 来替换 src 目录的别名
            '@': path.join(__dirname, './src')
        }
    }
}