// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com', 'localhost'],
    loader: 'default', // IMPORTANT: 'default' supports both static & remote
  },
};

module.exports = nextConfig;
