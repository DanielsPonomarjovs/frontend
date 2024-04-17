import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import Porsche from './Porsche'


export const metadata: Metadata = {
	title: 'Porsche',
	...NO_INDEX_PAGE
}

export default function PorschePage() {
	return <Porsche />
}
