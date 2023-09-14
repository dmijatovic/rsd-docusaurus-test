// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RSD documentation',
  tagline: 'RSD documentation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://dmijatovic.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/rsd-docusaurus-test/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dmijatovic', // Usually your GitHub org/user name.
  projectName: 'rsd-docusaurus-test', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en','nl'],
    localeConfigs:{
      en:{
        label: "English",
        htmlLang: 'en-GB',
      },
      nl:{
        label: "Nederlands",
        htmlLang: 'nl-NL',
      }
    }
  },

  plugins: [[require.resolve('docusaurus-lunr-search'),{
    // language codes
    languages: ['en','nl']
  }]],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:'https://github.com/dmijatovic/rsd-docusaurus-test/edit/main',
          // do not use current/next version
          includeCurrentVersion: false,
          showLastUpdateTime: true,
          showLastUpdateAuthor: false
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'RSD Documentation',
        logo: {
          alt: 'RSD logo',
          src: 'img/circle.webp',
        },
        hideOnScroll: false,
        items: [
          {
            type: "docsVersionDropdown",
            position: "left"
          },
          {
            label: "Users",
            to: "/category/user-documentation",
            position: "left"
          },
          {
            label: 'Developers',
            to:'/category/developer-documentation',
            position: 'left',
          },
          {
            type: "localeDropdown",
            position: "right"
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            href: 'https://research.software',
            position: 'right',
            label: 'RSD live',
          },
          {
            href: 'https://github.com/research-software-directory/RSD-as-a-service',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: "User documentation",
                to: "/category/user-documentation"
              },
              {
                label: 'Developers documentation',
                to:'/category/developer-documentation'
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
