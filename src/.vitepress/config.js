export default {
  title: 'VitePress',
  description: 'Just playing around.',

  themeConfig: {
    siteTitle: 'My Custom Title',
    logo: '/my-logo.svg',
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    lastUpdated: true,
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    },
    algolia: {
      appId: '8J64VVRP8K',
      apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
      indexName: 'vitepress'
    },
    nav: [
      { text: 'Guide', link: '/guide/what-is-vitepress', activeMatch: '/guide/' },
      { text: 'Configs', link: '/config/introduction', activeMatch: '/config/' },
      {
        text: 'Changelog',
        link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
      }
    ],
    sidebar: [
        {
          text: 'Information',
          collapsible: true,
          items: [
            { text: 'Introduction', link: '/guide/what-is-vitepress' },
            { text: 'Frequently Asked Questions', link: '/guide/getting-started' },
          ]
        },
        {
          text: 'Installation',
          collapsible: true,
          items: [
            { text: 'Installation', link: '/guide/markdown' },
            { text: 'Setup', link: '/guide/asset-handling' },
          ]
        },
        {
          text: 'Theme Config',
          collapsible: true,
          items: [
            { text: 'Addons', link: '/docs/addons' },
            { text: 'Wesite Name', link: '/docs/websiteName' },
            { text: 'Color Scheme', link: '/docs/colorScheme' },
            { text: 'Support Email', link: 'supporteMail' },
            { text: 'Locales', link: '/docs/locales' },
            { text: 'Admin', link: '/docs/admin/' },
            { text: 'Icons', link: '/docs/icons/' },
            { text: 'Index', link: '/docs/index/' },
            { text: 'Premium', link: '/docs/premium/' },
            { text: 'Preloader', link: '/docs/preloader/' },
            { text: 'Sidebar', link: '/docs/sidebar/' },
            { text: 'Meta', link: '/docs/meta/' },
            { text: 'Error', link: '/docs/error/' },
            { text: 'Sweet Alert', link: '/docs/sweetalert/' },
            { text: 'Blacklisted', link: '/docs/blacklisted/' },
            { text: 'Commands', link: '/docs/commands/' },

          ]
        },
        {
          text: 'Theme Formtypes',
          collapsible: true,
          items: [
            {
              text: 'Migration from VuePress',
              link: '/guide/migration-from-vuepress'
            },
            {
              text: 'Migration from VitePress 0.x',
              link: '/guide/migration-from-vitepress-0'
            }
          ]
        }
      ]
    
  }
}