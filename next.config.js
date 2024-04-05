/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,

	env: {
		SERVER_URL: process.env.SERVER_URL,
		APP_URL: process.env.APP_URL
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
		]
	},

	async rewrites() {
		return [
			{
				source: '/uploads/:path*',
				destination: 'http://localhost:4200/uploads/:path*'
			}
		]
	}
}

module.exports = nextConfig
