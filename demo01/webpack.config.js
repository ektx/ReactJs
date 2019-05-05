const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
	// development开发模式
	mode: 'production',
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
    }
}