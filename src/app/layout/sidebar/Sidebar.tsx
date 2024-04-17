'use client'

import { useQuery } from '@tanstack/react-query'
import cn from 'clsx'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { FC } from 'react'
import { FiLogOut } from 'react-icons/fi'
import { FaCar } from "react-icons/fa";


import Loader from '@/ui/Loader'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import { useIsAdminPanel } from '@/hooks/useIsAdminPanel'
import { useCategories } from '@/hooks/queries/useCategories'
import { ADMIN_MENU } from './admin-menu.data'
import { convertToMenuItems } from './convert-to-menu-items'

const Sidebar: FC = () => {
	const {data, isLoading} = useCategories()
	const { isAdminPanel, pathname} = useIsAdminPanel()

	return (
		<aside
			className='bg-primary flex flex-col justify-between z-10'
			style={{
				minHeight: 'calc(100% - 50px)',
				height: 'calc(100vh - 50px)'
			}}
		>
			<div className='ml-5 items-center justify-center'>
				{isLoading ? (
					<Loader />
				) : data ? (
					<>
						<div className='text-xs text-[#e7e7e7] mt-5 mb-3 uppercase ml-3'>
							{isAdminPanel ? 'Menu' : 'Models'}
						</div>
						<ul>
							{(isAdminPanel ? ADMIN_MENU : convertToMenuItems(data)).
							map(
								item => (
								<li key={item.href}>
									<Link
										className={cn(
											'inline-block text-xs hover:text-[#e17282] transition-colors duration-200 ml-3',
											pathname === `/category/${item.href}`
												? 'text-[#e7e7e7]'
												: 'text-[#e7e7e7]'
										)}
										href={item.href}
									>
										<span className="inline-block">{ }</span>
										<FaCar size={15} className='inline-block text-[#e7e7e7]'/>
										{ ' ' + item.label}
									</Link>
								</li>
							))}
						</ul>
					</>
				) : (
					<div className='flex items-center justify-center h-48 bg-gray-200 rounded-lg shadow-md'>     
					<p className='text-xl font-bold text-gray-600'> Categories not found! </p>  </div>
				)}
			</div>

		</aside>
	)
}

export default Sidebar
