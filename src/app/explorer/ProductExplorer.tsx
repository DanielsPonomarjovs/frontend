'use client'
import { ProductService } from '@/services/product/product.service'
import { TypePaginationProducts } from '@/types/product.interface'
import Heading from '@/ui/Heading'
import Button from '@/ui/button/Button'
import Catalog from '@/ui/catalog/Catalog'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { FC, useEffect, useState } from 'react'
import { useFilters } from './useFilters'
import cn from 'clsx'
import styles from './ProductExplorer.module.scss'
import Pagination from './pagination/Pagination'
import SortDropdown from './sort/SortDropdown'
import Filters from './filters/Filters'
import Search from '.././layout/header/Search'
import Loader from '@/ui/Loader'

interface IProductExplorer {
	initialProducts: TypePaginationProducts
}

const ProductExplorer: FC<IProductExplorer> = ({ initialProducts }) => {
	const [isFilterOpen, setIsFilterOpen] = useState(false)
	const { isFilterUpdated, queryParams, updateQueryParams } = useFilters()

	const { data, isFetching } = useQuery({
		queryKey: ['product explorer', queryParams],
		queryFn: () => ProductService.getAll(queryParams),
		initialData: initialProducts,	
		enabled: isFilterUpdated
	})

	return (
		<>
			<div className='flex items-center justify-between mb-7'>
			<Heading>
					
					{queryParams.searchTerm
						? `Search by query "${queryParams.searchTerm}"`
						: 'Explorer'}
				</Heading>
				{ data.products.length !== 0 &&  <SortDropdown />  }
			</div>

			<Button
				variant='white'
				onClick={() => setIsFilterOpen(!isFilterOpen)}
				className='mb-9'
			>
				{isFilterOpen ? 'Close' : 'Open'} filters
			</Button>

			<div
				className={cn(styles.explorer, {
					[styles.filterOpened]: isFilterOpen
				})}
			>
				<aside>

					<Filters />
					
			 </aside>
				<section>
						<Catalog products={data.products} isLoading={isFetching} />
			
					<Pagination
						changePage={page => updateQueryParams('page', page.toString())}
						currentPage={queryParams.page}
						numberPages={data.length / +queryParams.perPage}
					/>
				</section>
			</div>
		</>
	)
}

export default ProductExplorer
