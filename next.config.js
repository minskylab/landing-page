const { i18n } = require('./next-i18next.config');

module.exports = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
  },
  i18n,
};