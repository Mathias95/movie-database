
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700&display=swap'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
		'@/assets/sass/main.sass'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
		{ src: '~/plugins/VueFlickity.js', ssr: false }
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
		'nuxt-purgecss',
		'nuxt-material-design-icons'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
		extractCSS: true, //If you are using purgeCSS
		postcss: {
			plugins: {
				'postcss-url': false
			},
			//Change the postcss-preset-env settings
			preset: {
				stage: 0, //enable all (experimental) polyfills
				autoprefixer: {
					grid: true,
					flexbox: true,
					overrideBrowserlist: ['last 2 versions', 'ie >= 10', '> 5%']
				}
			}
		},
    extend(config, ctx) {
			//Run ESLint on save
			if (ctx.isDev && ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
    }
	}
}
