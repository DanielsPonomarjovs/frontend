import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import Layout from '@/app/layout'
import Heading from '@/ui/Heading'

export const metadata: Metadata = {
	title: 'Thanks',
	...NO_INDEX_PAGE
}

export default function ThanksPage() {
	return (
		<>
	<Heading className='text-center'> Thank you for your order! </Heading>
	<h1 className='text-center mt-5'> We've sent all data to your inbox it's easy to access. You can find more information on our website. </h1>
	</>
	)
	
}
