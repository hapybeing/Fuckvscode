/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // This allows us to import GLSL shaders for WebGL effects
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: ['raw-loader', 'glslify-loader'],
    });
    return config;
  },
  images: {
    domains: ['images.unsplash.com', 'your-supabase-url.supabase.co'],
  },
};

module.exports = nextConfig;
