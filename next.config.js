/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  // All the other config options you may have...
  async redirects() {
      return [
          {
              // What the user typed in the browser
              source: '/post/ability-to-pay-taxation',
              // Where the user will be redirected to
              destination: '/posts/ability-to-pay-taxation',
              // If the destination is a permanent redirect (308)
              permanent: true
          }
      ];
  }
};

module.exports = nextConfig;


