export default {

  target: "server",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Heiwan-Studio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/style/main.scss",
    "vue-slick-carousel/dist/vue-slick-carousel.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/vue-slick-carousel.js" },
    { src: "~/plugins/vee-validate.js"}
  ],

  styleResources: {
    scss: ["@/assets/style/_variables.scss", "@/assets/style/_fonts.scss"]
  },

  imports: {
    autoImport: true
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    global: true,
    dirs: [
      '@/components/visuals',
      '@/components/base',
      '@/components/simple',
      '@/components/blocks'
    ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/style-resources",
    "@nuxtjs/svg",
    'nuxt-gsap-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    "nuxt-mq",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  gsap: {
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true
    },
  },

  mq: {
    defaultBreakpoint: "lg",
    breakpoints: {
      mobile: 480,
      tablet: 950,
      lg: Infinity
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      "vee-validate/dist/rules"
    ]
  },

  server: {
    port: 3000, // default: 3000,
    host: "localhost" // default: localhost
  },

}
