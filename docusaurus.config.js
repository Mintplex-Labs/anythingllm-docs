// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/vsLight');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AnythingLLM',
  tagline: 'AnythingLLM is the all-in-one AI applications for RAG, Agents, and custom LLMs.',
  url: 'https://useanything.com',
  baseUrl: '/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/anythingllm.webp',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/mintplex-labs/anythingllm-docs/blob/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },

      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'AnythingLLM',
        logo: {
          alt: 'AnythingLLM logo',
          src: 'img/anythingllm.webp',
        },
        items: [
          {
            href: 'https://discord.gg/6UyHPeGZAC',
            label: 'Discord',
            position: 'right',
          },
          {
            href: 'https://twitter.com/anythingllm',
            label: '@AnythingLLM',
            position: 'right',
          },
          {
            href: 'https://github.com/mintplex-labs/anything-llm',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        logo: {
          src: 'img/anythingllm-lg.webp',
          height: 51,
        },
        style: 'light',
        links: [
          {
            title: 'Platforms',
            items: [
              {
                label: 'Docker Image',
                to: 'https://hub.docker.com/r/mintplexlabs/anythingllm',
              },
              {
                label: 'Desktop Download',
                to: 'https://useanything.com/download',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/mintplex-labs/anything-llm',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/6UyHPeGZAC',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/mintplexlabs',
              },
            ],
          },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'About',
          //       to: '/about',
          //     },
          //     {
          //       label: 'Privacy',
          //       href: 'https://useanything.com/privacy',
          //     },
          //     {
          //       label: 'Terms',
          //       href: 'https://useanything.com/terms',
          //     },
          //   ],
          // },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
