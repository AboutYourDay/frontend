module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer:{
		proxy:{
			'/':{
				target: 'http://ec2-3-133-13-151.us-east-2.compute.amazonaws.com:3000/',
				changeOrigin: true
			}
		}
	},
	publicPath: './',
	outputDir: '../server/public'
}