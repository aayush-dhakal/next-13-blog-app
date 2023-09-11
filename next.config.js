/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.pexels.com", "example.com", "static.wikia.nocookie.net"], // this allows us to use external url link(images.pexels.com, example.com) to add as image src. See about page for use case
  },
};

module.exports = nextConfig;
