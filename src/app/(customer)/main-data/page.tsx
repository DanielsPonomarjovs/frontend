import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import MainData from './MainData'


export const metadata: Metadata = {
	title: 'MainData',
	...NO_INDEX_PAGE
}

export default function MainDataPage() {
	return <MainData id={0} />
}
