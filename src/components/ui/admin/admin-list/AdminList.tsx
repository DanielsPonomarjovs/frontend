'use client'
import { FC } from 'react'
import { IListItem } from './admin-list.interface'
import Loader from '@/ui/Loader'
import AdminListItem from './AdminListItem'
import styles from './AdminList.module.scss'

interface IAdminList {
	listItems?: IListItem[]
	isLoading: boolean

	removeHandler?: (id:number) => void
}

const AdminList: FC<IAdminList> = ({
	isLoading, 
	removeHandler, 
	listItems = []
}) => {
	return (
		<div>
			{isLoading ? (
				<Loader />
			) : listItems.length ? (
				listItems.map(listItem => (
				<AdminListItem
					key={listItem.id}
					removeHandler={
						removeHandler ? () => removeHandler(listItem.id) : undefined
					}
					listItem={listItem}
					/>
				))
			) : (
				<div className={styles.notFound} > Elements not found</div>
			)}
		</div>
	)
}

export default AdminList