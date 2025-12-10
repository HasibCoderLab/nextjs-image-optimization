/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.google.com',
        
      },{
        hostname: "images.unsplash.com"
,
        
      },
    ]
  },
};

export default nextConfig;
