import { IProduct } from '@/types/product.interface'

export const PRODUCTS = 'products'

export type TypeProductData = {
	name: string
	price: number
	description?: string
	model?: string
	distancekm?: number
	engine?: string
	gas?: string
	gear?: string
	keys?: string
	origin?: string
	color?: string

	images: string[]
	categoryId: number
}

export type TypeProductDataFilters = {
	sort?: EnumProductSort | string
	searchTerm?: string
	page?: string | number
	perPage: string | number
	ratings: string
	minPrice?: string
	maxPrice?: string
	categoryId?: string
}

export enum EnumProductSort {
	HIGH_PRICE = 'high-price',
	LOW_PRICE = 'low-price',
	NEWEST = 'newest',
	OLDEST = 'oldest'
}


export type TypeParamsFilters = {
	searchParams: TypeProductDataFilters
}


