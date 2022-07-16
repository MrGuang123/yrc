const { resolve } = require('path')

module.exports = {
  // "stories": [
  //   "../src/**/*.stories.mdx",
  //   "../src/**/*.stories.@(js|jsx|ts|tsx)"
  // ],
  stories: [
    {
      directory: '../src/docs',
      titlePrefix: 'YRC',
      files: '*.stories.*'
    }
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    'storybook-addon-themes',
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  core: {
    builder: {
      name: 'webpack5',
      options: {
        lazyCompilation: true,
        fsCache: true
      }
    }
    // builder: 'webpack5',
  },
  // 支持分包编译  有点慢。。。
  // "features": {
  //   storyStoreV7: true
  // },
  "framework": "@storybook/react",
  webpackFinal: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": resolve(__dirname, '../src/')
    }

    return config
  }
}