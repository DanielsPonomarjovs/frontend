import { Type } from 'typescript'
import { ICategory } from './category.interface'
import { IReview } from './review.interface'

export interface IProduct {
	id: number
	name: string
	slug: string
	description: string
	price: number
	reviews: IReview[]
	images: string[]
	createdAt: string
	category: ICategory
	model: string
	distancekm: number
	engine: string
	gas: string
	gear: string
	keys: string
	origin: string
	color: string
}

export interface IProductDetails {
	product: IProduct
}

export interface IProductExplorer {
	initialProducts: TypePaginationProducts
}

export type TypeProducts = {
	products: IProduct[]
}

export type TypePaginationProducts = {
	length: number
	products: IProduct[]
}
