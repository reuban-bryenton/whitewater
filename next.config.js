/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
    dest: 'public',
    register: true,
    sw: 'service-worker.js',
    skipWaiting: true,
    publicExcludes: [
        '!robots.txt',
        '!sitemap.xml.gz',
    ],
});

module.exports = withPWA({
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
        locales: ['en'],
        defaultLocale: 'en',
    },
});
