/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,

	env: {
		SERVER_URL: process.env.SERVER_URL,
		APP_URL: process.env.APP_URL,
		NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
		STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY
	},
	images: {
	domains: [
			'loremflickr.com',
                        'aptronixindia.com',
                        'picsum.photos',
                        'avatars.githubusercontent.com',
                        'cdn.jdpower.com',
                        'cloudflare-ipfs.com',
                        'm.media-amazon.com',
                        'img.plc.auction',
                        'vis.iaai.com',
                        'images.unsplash.com',
                        'i.imgur.com',
                        'source.unsplash.com'
	],
  },

	async rewrites() {
		return [
			{
			source: '/uploads/:path*',
			destination: 'http://94.26.225.102:4200/uploads/:path*',
			}
		]
	}
}

module.exports = nextConfig
