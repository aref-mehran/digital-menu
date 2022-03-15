module.exports = {
  publicPath: '/digital-menu',
  outputDir: '../digital-menu-build',

  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        args[0].title = 'Menu Colosso';
        return args;
      });
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
      enableBridge: false
    }
  }
}
