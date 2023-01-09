/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    GTM_ID: 'GTM-M5HV9PR',
  },
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['es', 'en'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'es',
  }
}

module.exports = nextConfig
