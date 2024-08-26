import type {Config} from '@docusaurus/types';
import {themes as prismThemes} from 'prism-react-renderer';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'RugSafe Documentation',
  tagline: 'Secure Your Trades with RugSafe',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.rugsafe.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'rugsafe', // Your GitHub org/user name.
  projectName: 'rugsafe-docs', // Your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/rugsafe/rugsafe-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/rugsafe/rugsafe-docs/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/rugsafe-social-card.jpg',
    navbar: {
      title: 'RugSafe Docs',
      logo: {
        alt: 'RugSafe Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/rugsafe/rugsafe-docs',
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
              label: 'Getting Started',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/rugsafe',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/rugsafeprotocol',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/rugsafe/rugsafe-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} RugSafe Protocol. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    // Add this colorMode configuration
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;