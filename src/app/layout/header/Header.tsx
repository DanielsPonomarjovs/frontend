'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { AiOutlineHeart, AiOutlineLogin } from 'react-icons/ai'
import {MdOutlineAdminPanelSettings} from 'react-icons/md'
import HeaderProfile from './HeaderProfile'

import HeaderCart from './cart/HeaderCart'
import { useIsAdminPanel } from '@/hooks/useIsAdminPanel'
import { useAuth } from '@/hooks/useAuth'
import Search from './Search'
import photologo from './logo.png'
import AuthButton from './AuthButton'

const Header: FC = () => {
	const {isAdminPanel} = useIsAdminPanel()
	const {user} = useAuth()

	return ( 
		<header className='bg-secondary w-full grid'
			style=
			{{
					gridTemplateColumns: '0.84fr 3fr 1.2fr'
			}}>
				<Link href='/'>
					{isAdminPanel ? (
						<h2 className='text-xl text-[#d3d3d3] mt-3 ml-3 mb-1.5'> Admin panel </h2>
					) : (
						<h2 className='text-3xl ml-2 text-[#d3d3d3]'> Crimson 
						</h2>
				)}
				</Link>
				<Search />
			<div className='flex items-center justify-end gap-10'>
				{
					user?.isAdmin && !isAdminPanel && (
						<Link
							href='/admin/dashboard'
							className='hover:text-[#e17282] transition-colors duration-200 text-[#72E1D1] inline-block text-lg'
							>
								<MdOutlineAdminPanelSettings />
						</Link>
					)
				} 
				{!!user && (
				<Link href='/favorites'>
					<AiOutlineHeart size={28} className='hover:text-[#e17282] transition-colors duration-200 text-[#72E1D1] inline-block text-lg' />

				</Link>
				)}
				
				<HeaderCart />
				{user ? (
					<HeaderProfile />
				) : (
					<Link
							href='/auth'
							className='hover:text-[#e17282] transition-colors duration-200 text-[white] inline-block text-lg mr-12'
							>
								<AiOutlineLogin size={40} className='hover:text-[#e17282]'/>
						</Link>
				)}
				
			</div>
		</header>
	)
}

export default Header
