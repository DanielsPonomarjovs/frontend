'use client'
import { IProduct } from '@/types/product.interface'
import { FC } from 'react'
import Heading from '../Heading'
import Loader from '../Loader'
import ProductItem from './product-item/ProductItem'

interface ICatalog {
	products: IProduct[]
	isLoading?: boolean
	title?: string
}

const Catalog: FC<ICatalog> = ({ products, isLoading, title }) => {
	if (isLoading) return <Loader/>

	return (
		<section className='content-center'>
		
			
			{products.length != 0 ? (
				<>
					{title && <Heading className='mb-5 text-center '> {title} </Heading>}
					<div className='grid tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-10 '>
						{products.map(product => (
							<ProductItem key={product.id} product={product}/>
						))}
					</div>
				</>
			) : (
				<div className='flex items-center justify-center h-90 bg-gray-300'>  <div className='text-3xl text-orange-800'> There are no {title} cars at the moment  </div>  </div>
			)}
		</section>
	)
}

export default Catalog
