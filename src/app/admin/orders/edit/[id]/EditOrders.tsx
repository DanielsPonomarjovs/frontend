'use client'
import Heading from '@/ui/Heading'
import { FC } from 'react'
import { useParams } from 'next/navigation'
import { useAdminOrders } from '../../useAdminOrders'


const EditOrders: FC = () => {
	const { data, isFetching } = useAdminOrders()
	const params = useParams()
	console.log(params.id)


	return <> 
	<Heading className='mb-7'> Orders Id : {params.id} </Heading>
	
	
	</>
}
export default EditOrders