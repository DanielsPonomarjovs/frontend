'use client'
import { getAdminUrl } from '@/config/url.config'
import { IListItem } from '../../../components/ui/admin/admin-list/admin-list.interface';
import { ProductService } from '@/services/product/product.service'
import { useMutation, useQuery } from '@tanstack/react-query'
import { formatDate } from '@/utils/format-date'

import Reviews from './Reviews'
import { ReviewService } from '@/services/review.service'

export const useAdminReviews = () => {
	const {data, isFetching} = useQuery({
		queryKey: ['get admin reviews'],
		queryFn: () => ReviewService.getAll(),
		select: ({data}) => 
			data.map(
				(review): IListItem => ({
					id: review.id,
					items: [
						Array.from({ length: review.rating})
						.map(() => ' *')
						.join(' '),
						review.user.name
					]
			})
			)
		}
	)


	return {
		data,
		isFetching
	}
}