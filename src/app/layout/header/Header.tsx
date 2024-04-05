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
						<h2 className='text-3xl text-white font-semibold'> Admin panel </h2>
					) : (
						<h2 className='text-3xl ml-1 text-[#72E1D1]'> Crimson 
						</h2>
				)}
				</Link>
				<Search />
			<div className='flex items-center justify-end gap-10'>
				{
					user?.isAdmin && !isAdminPanel && (
						<Link
							href='/admin'
							className='hover:text-primary transition-colors duration-200 text-white inline-block text-lg'
							>
								<MdOutlineAdminPanelSettings />
						</Link>
					)
				} 
				{!!user && (
				<Link href='/favorites'>
					<AiOutlineHeart size={28} style={{ color: '#72E1D1'}} />

				</Link>
				)}
				
				<HeaderCart />
				{user ? (
					<HeaderProfile />
				) : (
					<Link
							href='/auth'
							className='hover:text-primary transition-colors duration-200 text-white inline-block text-lg mr-12'
							>
								<AiOutlineLogin size={40} color='72E1D1'/>
						</Link>
				)}
				
			</div>
		</header>
	)
}

export default Header
