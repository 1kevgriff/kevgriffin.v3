// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`


const tailwindcss = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  siteName: 'Kevin W. Griffin',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/*.md',
        typeName: 'Article',
        route: '/:permalink',
        remark: {
          plugins: [
            ['gridsome-plugin-remark-shiki', { theme: 'nord', skipInline: false }]
          ]
        }
      }
    }
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          tailwindcss,
          ...process.env.NODE_ENV === "production" ? [purgecss] : []
        ],
      },
    },
  }
}
