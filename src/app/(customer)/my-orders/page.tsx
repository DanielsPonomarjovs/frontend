import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import MyOrders from './MyOrders'

export const metadata: Metadata = {
	title: 'My orders',
	...NO_INDEX_PAGE
}

export default function Page() {
	return <MyOrders />
}
