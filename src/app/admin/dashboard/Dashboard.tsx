'use client'
import { StatisticsService } from '@/services/statistics.service'
import Heading from '@/ui/Heading'
import Loader from '@/ui/Loader'
import { convertPrice } from '@/utils/convertPrice'
import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'
import styles from './Dashboard.module.scss'

const Dashboard: FC = () => {
	const { data, isFetching } = useQuery({
		queryKey: ['statistics'],
		queryFn: () => StatisticsService.getMain(),
		select: ({ data }) => data
	})

	return (
		<>
			<Heading className='mt-5 mb-8 text-center'> Dashboard </Heading>
			{isFetching ? (
				<Loader />
			) : data?.length ? (
				<div className={styles.wrapper}>
					{data.map((item, index) => (
						<div key={item.name} className={styles.item}>
							<div> {item.name} </div>
							<div>
								{index === data.length - 1
									? convertPrice(item.value || 0)
									: item.value}
							</div>
						</div>
					))}
				</div>
			) : (
				<div> Statistics is not loaded! </div>
			)}
		</>
	)
}

export default Dashboard
