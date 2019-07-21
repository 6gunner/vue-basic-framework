module.exports = {
	css: {
		loaderOptions: {
			stylus: {
				'resolve url': true,
				'import': []
			}
		}
	},
	pluginOptions: {
		'cube-ui': {
			postCompile: true,
			theme: false
		}
	},
	lintOnSave: process.env.NODE_ENV !== 'production',

	devServer: {
		https: false,
		open: true,
		host: 'localhost',
		port: 9002,
		proxy: {
			'/api/': {
				target: 'http://106.14.113.59:7090', // 配置反向代理
				changeOrigin: true,
				cookieDomainRewrite: 'localhost',
				headers: {}
			}
		},
		// eslint
		overlay: {
			warnings: false,
			errors: false
		}
	}
}
