module.exports = {
  title: 'MoneyStream',
  tagline: 'Streaming money for the streaming web',
  url: 'https://moneystreamdev.github.io',
  baseUrl: '/moneystream-project/',
  favicon: 'img/favicon.ico',
  organizationName: 'moneystreamdev', // Usually your GitHub org/user name.
  projectName: 'moneystream-project', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'MoneyStream',
      logo: {
        alt: 'MoneyStream',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/moneystreamdev',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
    //     {
    //       title: 'Docs',
    //       items: [
    //         {
    //           label: 'Style Guide',
    //           to: 'docs/',
    //         },
    //         {
    //           label: 'Second Doc',
    //           to: 'docs/doc2/',
    //         },
    //       ],
    //     },
        {
          title: 'Community',
          items: [
            {
              label: 'Telegram Support',
              href: 'https://t.me/bsvmoneystream',
            },
    //         {
    //           label: 'Discord',
    //           href: 'https://discordapp.com/invite/docusaurus',
    //         },
    //         {
    //           label: 'Twitter',
    //           href: 'https://twitter.com/docusaurus',
    //         },
          ],
        },
         {
           title: 'Get Notified',
           items: [
             {
               label: 'Subscribe to MoneyStream Announcements',
               href: 'https://upubsub.com/sub/5f0105afc530a409f602bf53',
             },
    //         {
    //           label: 'GitHub',
    //           href: 'https://github.com/facebook/docusaurus',
    //         },
           ],
         },
       ],
      copyright: `Copyright © ${new Date().getFullYear()} The MoneyStream Team. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'userguide',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
