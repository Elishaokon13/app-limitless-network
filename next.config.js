/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['@poodl/widget']);

const nextConfig = {
  reactStrictMode: true,
  basePath: "",
  // Add other Next.js configurations here
  // ...
};

module.exports = withTM(nextConfig);
