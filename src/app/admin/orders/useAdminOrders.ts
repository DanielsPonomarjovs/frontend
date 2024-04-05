'use client'
import { getAdminUrl } from '@/config/url.config'
import { IListItem } from '../../../components/ui/admin/admin-list/admin-list.interface';
import { ProductService } from '@/services/product/product.service'
import { useMutation, useQuery } from '@tanstack/react-query'
import { formatDate } from '@/utils/format-date'
import { OrderService } from '@/services/order.service'
import { convertPrice } from '@/utils/convertPrice'

export const useAdminOrders = () => {
	const {data, isFetching} = useQuery({
		queryKey: ['get admin orders'],
		queryFn: () => OrderService.getAll(),
		select: ({data}) => 
			data.map(
				(order): IListItem => ({
					id: order.id,
					editUrl: getAdminUrl(`/orders/edit/${order.id}`),
					items: [
						`# ${order.id}`,
						order.status,
						formatDate(order.createdAt),
						convertPrice(order.total)
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