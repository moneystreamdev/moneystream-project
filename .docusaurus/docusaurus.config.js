export default {
  "plugins": [],
  "themes": [],
  "customFields": {},
  "themeConfig": {
    "navbar": {
      "title": "MoneyStream",
      "logo": {
        "alt": "My Site Logo",
        "src": "img/logo.svg"
      },
      "links": []
    }
  },
  "title": "MoneyStream",
  "tagline": "Streamable money for the streaming web",
  "url": "https://moneystreamdev.github.io",
  "baseUrl": "/moneystream-project/",
  "favicon": "img/favicon.ico",
  "organizationName": "moneystreamdev",
  "projectName": "moneystream-project",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "homePageId": "doc1",
          "sidebarPath": "/home/fullcycle/source/wm/moneystreamdev/moneystream-project/sidebars.js",
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/blog/"
        },
        "theme": {
          "customCss": "/home/fullcycle/source/wm/moneystreamdev/moneystream-project/src/css/custom.css"
        }
      }
    ]
  ]
};