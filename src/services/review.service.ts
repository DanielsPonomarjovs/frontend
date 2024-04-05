
import axios from 'axios'
import Cookies from 'js-cookie'
import { axiosClassic, instance } from '@/api/api.interceptor'
import { IReview } from '@/types/review.interface'
import { Type } from 'typescript'

const REVIEWS = 'reviews'

type TypeData = {
	rating: number
	text: string
}

export const ReviewService = {
	async getAll() {
		return instance<IReview[]>({
			url: REVIEWS,
			method: 'GET'
		}) 
	},

	async getAverageByProduct(productId: string | number) {
		return axiosClassic<number>({
			url: `${REVIEWS}/average-by-product/${productId}`,
			method: 'GET'
		})
	},

	async leave(productId: string | number, data: TypeData) {
		return instance<IReview>({
			url: `${REVIEWS}/leave/${productId}`,
			method: 'POST',
			data
		}) 
	},
}

