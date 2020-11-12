export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'board-procurados-web',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/axe.js', mode: 'client' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-i18n',
    '@nuxtjs/date-fns',
  ],

  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en-US.js',
      },
      {
        code: 'es',
        file: 'es-ES.js',
      },
      {
        code: 'pt-br',
        file: 'pt-BR.js',
      }
    ],
    strategy: 'prefix',
    defaultLocale: 'es',
    vueI18n: {
      fallbackLocale: 'en',
    },
    lazy: true,
    langDir: 'lang/',
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  render: {
    csp: {
      hashAlgorism: 'sha256',
      reportOnly: false,
      policies: {
        'default-src': ["'self'"],
        'script-src': [
          "'self'",
          "'unsafe-eval'",
          //"'sha256-V3BCJ5uD3Kg5rYNnehUAfG7F2MSoV0wetV4iU6feE7w='"
        ],
        'img-src': ["https:", "'self'"],
        'style-src': [
          "'self'",
          "'unsafe-inline'"
        ],
        'script-src-elem': [
         "'self'",
         "'unsafe-inline'"
        ],
      },
    }
  }
}
