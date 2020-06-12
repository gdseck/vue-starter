const purgeCss = require('@fullhuman/postcss-purgecss');
const isProduction = process.env.NODE_ENV === 'production';

const getConfig = ctx => {
  const isProductionLib = ctx.env === 'production-lib';

  const config = {
    plugins: [
      require('postcss-import')(),
      require('tailwindcss')('./tailwind.config.js'),
      require('postcss-custom-properties')({
        preserve: false,
      }),
      require('postcss-nested'),
      require('postcss-url'),
      require('autoprefixer'),
    ],
  };

  if (isProduction || isProductionLib) {
    const purgeCSSConfig = {
      css: ['./src/css/main.css'],
      defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
      whitelist: ['app', 'after', 'before', 'ping-active'],
      whitelistPatterns: [
        /^w-.*\/.*/,
        /^alert-.*/,
        /-enter$/,
        /-enter-active$/,
        /-enter-to$/,
        /-leave$/,
        /-leave-active$/,
        /-leave-to$/,
      ],
    };

    config.plugins.push(purgeCss(purgeCSSConfig));
    config.plugins.push(require('cssnano')({ preset: 'default' }));
  }

  return config;
};

module.exports = getConfig;
