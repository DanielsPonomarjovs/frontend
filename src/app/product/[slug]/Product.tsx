'use client'
import { ProductService } from '@/services/product/product.service'
import { IProduct } from '@/types/product.interface'
import Heading from '@/ui/Heading'
import { useQuery } from '@tanstack/react-query'
import CarInformation from './CarInformation'
import ProductReviewsCount from './ProductReviewsCount'
import { ProductGallery } from './ProductGallery'
import SimilarProducts from './SimilarProduct'
import ProductInformation from './product-information/ProductInformation'
import ProductReviews from './product-reviews/ProductReviews'

interface IProductPage {
	initialProduct: IProduct
	similarProducts: IProduct[]
	slug?: string
}

export default function Product({
	initialProduct,
	similarProducts,
	slug = ''
}: IProductPage) {
	const { data: product } = useQuery({
		queryKey: ['get product', initialProduct.id],
		queryFn: () => ProductService.getBySlug(slug),
		initialData: initialProduct,
		enabled: !!slug
	})

	return (
		<>
			<Heading className=''> {product.name} </Heading>
			<ProductReviewsCount product={product} />
			<div
				className='grid gap-12 mt-5'
				style={{
					gridTemplateColumns: '1fr 1fr	1fr'
				}}
			>
				<ProductGallery images={product.images} />
				<div className='opacity-85 font-light'>
					<div className='font-semibold mb-1'> </div>
					{product.description}

					<CarInformation product={product} />
				</div>
				<ProductInformation product={product} />
			</div>
			<SimilarProducts similarProducts={similarProducts} />
			<ProductReviews reviews={product.reviews} productId={product.id} />
		</>
	)
}
