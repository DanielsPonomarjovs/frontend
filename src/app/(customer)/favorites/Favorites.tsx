'use client'

import { useProfile } from '@/hooks/useProfile'
import Catalog from '@/ui/catalog/Catalog'

interface IFavorites {}

export default function Favorites({}: IFavorites) {
	const { profile } = useProfile()
	return (
			<><Catalog products={profile?.favorites || []} title={profile?.favorites.length ? 'Favorites' : 'Favorites'} /> 
			<div className='mt-5 text-center'>
			{profile?.favorites.length === 0 && ( <p style={{ color: 'red', fontStyle: 'italic' }}>Currently, the favorites list is empty since you haven`t added anything to favorites yet.</p>
			)}
		</div></>	
	)
}
