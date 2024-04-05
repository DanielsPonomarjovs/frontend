'use client'
import { getAdminUrl } from '@/config/url.config'
import { IListItem } from './../../../components/ui/admin/admin-list/admin-list.interface';
import { ProductService } from '@/services/product/product.service'
import { useMutation, useQuery } from '@tanstack/react-query'
import { formatDate } from '@/utils/format-date'

export const useAdminProducts = () => {
	const {data, isFetching, refetch} = useQuery({
		queryKey: ['get admin products'],
		queryFn: () => ProductService.getAll(),
		select: data => 
			data.products.map((product): IListItem => {
				return {
					id: product.id,
					viewUrl: `/product/${product.slug}`,
					editUrl: getAdminUrl(`/products/edit/${product.id}`),
					items: [
						product.name,
						product.category.name,
						formatDate(product.createdAt)
					]
				}
			})
		}
	)

	const { mutate } = useMutation(
		{
			mutationKey: ['delete product'],
			mutationFn: (id: number) => ProductService.delete(id),
			onSuccess: () => refetch()
		}
	)

	return {
		mutate,
		data,
		isFetching
	}
}