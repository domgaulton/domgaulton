/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/moxies-pubs',
        destination: 'https://moxies-pubs.domgaulton.tech',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
