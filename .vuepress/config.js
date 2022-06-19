const { description } = require('../package')

module.exports = {
  theme: 'yuu',
  dest: 'docs/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Tiscord',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   description: description,
   */

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    yuu: {
      defaultDarkTheme: true,
    },
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      { text: 'GitHub', link: 'https://github.com/tiscordlib/guide' },
      { text: 'Tiscord', link: 'https://tiscord.me/' }
    ],
    sidebar: [
      {
        title: 'Guide',
        path: '/',
        collapsable: false,
        children: [
          '/',
        ]
      },

      {
        title: 'Getting started',
        path: '/gettingstarted',
        collapsable: false,
        children: [
          '/gettingstarted/setup',
          '/gettingstarted/creating-base',
          '/gettingstarted/creating-handlers'
        ]
      }
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
