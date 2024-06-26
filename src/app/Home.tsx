
import { TypePaginationProducts, TypeProducts } from '@/types/product.interface'
import Heading from '@/ui/Heading'
import Catalog from '@/ui/catalog/Catalog'
import { FC } from 'react'
import { getSiteUrl } from '@/config/url.config'
import Carousel from '@/ui/carousel/Carousel'
import { carouselSlice } from '@/store/carousel/carousel.slice'
import { carouselItems } from './carousel.data'

const Home: FC<TypePaginationProducts> = ({products}) => 
{
	return (
		<>
		<Carousel items={carouselItems} className='mb-10' />
		<Catalog title='New Suggestions' products={products} />
		</>
	)
}

export default Home