import { instance } from '@/app/api/api.interceptor'
import { IOrderOffer } from '@/types/orderoffer.interface'

const ORDEROFFER = 'orderoffer'

type TypeData = {
	text: string
}

export const OrderOfferService = {
	async getAll() {
		return instance<IOrderOffer[]>({
			url: ORDEROFFER,
			method: 'GET'
		})
	},

	async leave(userId: number, data: TypeData) {
		return instance<IOrderOffer>({
			url: `${ORDEROFFER}/leave/${userId}`,
			method: 'POST',
			data: data
		})
	}
}
