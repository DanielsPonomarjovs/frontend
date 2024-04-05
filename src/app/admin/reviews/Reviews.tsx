'use client'
import Heading from '@/ui/Heading'
import { useAdminReviews } from './useAdminReviews'
import AdminList from '@/ui/admin/admin-list/AdminList'
import { FC } from 'react'


const Reviews: FC = () => {
	const { data, isFetching} = useAdminReviews()

	return (
		<>
			<Heading className='mb-7'> Reviews </Heading>
			<AdminList 
			isLoading={isFetching} 
			listItems={data} 
			 />
		</>
	)
}
export default Reviews