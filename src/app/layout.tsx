import { PropsWithChildren } from 'react'
import '@/assets/styles/globals.scss'
import Providers from '@/providers/Providers'

import type { Metadata } from 'next'
import { SITE_NAME } from '@/constants/seo.constants'
import { getSiteUrl } from '@/config/url.config'
import Header from './layout/header/Header'
import Sidebar from './layout/sidebar/Sidebar'
import { Kanit } from 'next/font/google'




 export const metadata: Metadata = {
	icons: {
		icon: '/public/favicon.svg'
	},
	title: {
		absolute: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	openGraph: { 
		type: 'website',
		siteName: SITE_NAME,
		emails: ['danielsponomarjovs@gmail.com']
	}
} 

const kanit  = Kanit({
	weight: ['400', '500', '700'],
	subsets: ['latin'],
	display: 'swap',
	style: ['normal'],
	variable: '--font-roboto'
})


export default function RootLayout({ children }: PropsWithChildren<unknown>) {

	return (
	<html lang='en' className={kanit.className}>
		<body>
		<Providers> 
				<div className='bg-secondary '> 
		<Header />

		<div className='grid' style={{
			gridTemplateColumns: '.4fr 4fr'
		}}>

		<Sidebar />
		<main className={'p-24 pb-52 bg-bg-color rounded-tl-3xl'}> {children} </main>
		</div>
		</div> 
		</Providers>
			<div id='modal'> </div>
			
		</body>
		
		</html>
	)
}