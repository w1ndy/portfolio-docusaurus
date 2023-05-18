// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Di Weng",

  tagline: "Portfolio of Di Weng",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://dwe.ng",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "w1ndy", // Usually your GitHub org/user name.
  projectName: "w1ndy.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Di Weng",
        logo: {
          alt: "Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Portfolio",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Portfolio",
            items: [
              {
                label: "Introduction",
                to: "/",
              },
              {
                label: "Experience",
                to: "/experience",
              },
              {
                label: "Publications",
                to: "/publications/2023",
              },
            ],
          },
          {
            title: "Contact",
            items: [
              {
                label: "Office",
                href: "https://google.com/maps/?q=E502,%20Ningbo%20branch,%20College%20of%20Software%20Technology,%20Zhejiang%20University,%20Ningbo,%20Zhejiang,%20China",
              },
              {
                label: "Email",
                href: "mailto:dweng@zju.edu.cn",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Google Scholar",
                href: "https://scholar.google.com/citations?user=Yi1KUZcAAAAJ&hl=en",
              },
              {
                label: "GitHub",
                href: "https://github.com/w1ndy",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/dw_vis",
              },
              {
                label: "Mastodon",
                href: "https://social.dwe.ng/@dw_vis",
              },
              {
                label: "Unsplash",
                href: "https://unsplash.com/@skies457",
              },
            ],
          },
        ],
        copyright: `Built with Docusaurus and powered by GitHub Pages.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],
};

module.exports = config;
