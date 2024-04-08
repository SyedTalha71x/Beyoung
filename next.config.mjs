/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'static.nike.com'
            },
            {
                protocol: 'https',
                hostname: 'i.pinimg.com'
            }
        ]
    },
};

export default nextConfig;
