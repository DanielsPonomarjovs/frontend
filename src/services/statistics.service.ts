import { instance } from '@/api/api.interceptor'
import { IReview } from '@/types/review.interface'
const STATISTICS = 'statistics'

export type TypeStatisticsResponse = 
{
	map(arg0: (item: any, index: any) => import("react").JSX.Element): import("react").ReactNode
	length: number
	name: string
	value: number
}

export const StatisticsService = {
	async getMain() {
		return instance<TypeStatisticsResponse>({
			url: `${STATISTICS}/main`,
			method: 'GET',
		}) 
	}
}

