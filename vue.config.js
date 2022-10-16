// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   //关闭语法检查
//   lintOnSave:false 
// })

module.exports = {
	lintOnSave: false,
	devServer: {
		proxy: {
			'^/api': {
				target: 'http://localhost:8888',
				changeOrigin: true,
				logLevel: 'debug',
				pathRewrite: {
					'^/api': '/'
				},
			},
		},
	},
}
