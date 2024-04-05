import { IProduct } from '@/types/product.interface'
import { convertPrice } from '@/utils/convertPrice'
import Link from 'next/link'
import { FC } from 'react'
import AddToCartInline from './AddToCartInline'
import FavoriteButton from '@/ui/catalog/product-item/FavoriteButton'
import { FaLock } from 'react-icons/fa'
import { useAuth } from '@/hooks/useAuth'

interface IProductInformation
{
	product: IProduct
}


export default function ProductInformation({ product}:IProductInformation) {
	const { user } = useAuth()

	console.log(product)
	

	return (
		<div className='bg-white rounded-lg shadow-mb p-6 relative h-max'>
			<div className='text-3xl font-semibold'>
				{convertPrice(product.price)}
			</div>
			<div className='mt-2'>
				$6.88 Shipping{' '}
				<Link href='/' className='text-aqua font-semibold ml-2'>
					Details of Delivery
				</Link>
			</div>
			<span className='opacity-50 mt-1 text-sm block'>
				Sales taxes may apply at checkout

			</span>
			<div className='mt-4 text-sm'>
				<span className='opacity-50 mr-1'>
					Delivery
				</span> Thursday, June 10
			</div>
			<AddToCartInline product={product}  />

			<p className='flex items-center mt-2 opacity-40 text-sm'>
				<FaLock className='mr-2' /> Secure transaction
			</p>
			<div className='absolute top-6 right-6'>
				{user && (
					<FavoriteButton productId={product.id} />
				)}
				
			</div>


		</div>
	)
}