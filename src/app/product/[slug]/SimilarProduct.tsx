import { FC } from 'react'
import { IProduct } from '@/types/product.interface'
import Heading from '@/ui/Heading'
import ProductItem from '@/ui/catalog/product-item/ProductItem'

interface ISimilarProducts {
	similarProducts: IProduct[]
}

export default function SimilarProducts({ similarProducts }: ISimilarProducts) {
	return (
		<div className='mt-20'>
			<Heading className='mb-7'> Сопутствующие лоты: </Heading>
			{similarProducts.length ? (
				<div className='grid grid-cols-4 gap-10'>
					{similarProducts.slice(0,3).map(product => (
						<ProductItem key={product.id} product={product} />
					))}
				</div>
				) : (
					<div> К сожалению, на данный момент нет соответсвующих предложений </div>
			)}
		</div>
	)
}