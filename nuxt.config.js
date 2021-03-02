export default {
    mode: 'universal',
    //bGH4eJEB
    /*
     ** Headers of the page
     */
    // Login: nuxtrestaurant @4arabdeveloper.com
    // Password: bGH4eJEB
    // Path: /home/dybficbs/public_html/nuxt_restaurant
    // source /home/dybficbs/nodevenv/nuxt_restaurant/11/bin/activate && cd /home/dybficbs/nuxt_restaurant
    //RX0&zIZ#$d  -->  whms
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
        '~/assets/css/bootstrap.min.css',
        '~/assets/css/fontawesome.all.min.css',
        '~/assets/css/animate.min.css',
        '~/assets/css/owl.carousel.min.css',
        '~/assets/css/fancybox.min.css',
        '~/assets/css/chat.css',
        '~/assets/css/slicknav.min.css',
        '~/assets/css/bootstrap-datetimepicker.min.css',
        '~/assets/css/style.css',
        '~/assets/css/responsive.css'
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    script: [
        { src: 'js/jquery-3.4.1.min.js' },
        { src: 'js/tether.min.js' },
        { src: 'js/popper.min.js' },
        { src: 'js/bootstrap.min.js' },
        { src: 'js/owl.carousel.min.js' },
        { src: 'js/datetimepicker-moment.min.js' },
        { src: 'js/bootstrap-datetimepicker.min.js' },
        { src: 'js/jquery.slicknav.min.js' },
        { src: 'js/jquery.fancybox.min.js' },
        { src: 'js/wow-1.3.0.min.js' },
        { src: 'js/jquery.validate.js' },
        { src: 'js/form-step.js' },
        { src: 'js/youtube-background.js' },
        { src: 'js/jquery.filterizr.min.js' },
        { src: 'js/chat.js' },
        { src: 'js/coming-soon.js' },
        { src: 'js/active.js' }
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [],
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
}