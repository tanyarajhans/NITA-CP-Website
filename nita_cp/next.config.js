module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "www.w3.org", "drive.google.com", "static.toiimg.com"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};
