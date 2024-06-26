import Home from '@/app/Home'
import { ProductService } from '@/services/product/product.service'
import { Metadata } from 'next'


export const revalidate = 60

async function getProducts() {
	const data = await ProductService.getAll({
		page: 1,
		perPage: 4,
		ratings: ''
	})
	
	return data
}

export default async function HomePage() {
	const data = await getProducts()
	return <Home products={data.products} length={data.length} />
}