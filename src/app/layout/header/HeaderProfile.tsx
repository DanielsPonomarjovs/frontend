'use client'
import Image from 'next/image'
import { FC } from 'react'
import { IoExitOutline } from "react-icons/io5";

import { useProfile } from '@/hooks/useProfile'
import { useOutside } from '@/hooks/useOutside'
import Link from 'next/link'
import { logout } from '@/store/user/user.actions'
import { useAuth } from '@/hooks/useAuth'
import { useActions } from '@/hooks/useActions'

const HeaderProfile: FC = () => {
	const { profile } = useProfile()
	const { isShow, ref, setIsShow} = useOutside(false)
	const { logout } = useActions()
	const { user } = useAuth()

	if(!profile?.avatarPath) return null
	return (
		<div className='relative mr-5 mt-2'  ref={ref}>
			<button onClick={()=> setIsShow(!isShow)}>
			<Image
					width={40}
					height={40}
					src={profile?.avatarPath}
					alt='profile'
					className='rounded-full border-primary  animate-opacity'
				/>
			</button>
			{isShow && (
				<div
					className='absolute w-40 right-2 z-25'
					style={{
						top: 'calc(100% + 1rem)'
					}}
				>
					<Link
						href='/my-orders'
						className='bg-white shadow py-1 px-4 block w-full rounded-md hover:text-primary duration-300 transition-colors'
					>
						View orders
					</Link>

					{user && (
					<Link href='' className='bg-white shadow py-1 px-4 block w-full rounded-md hover:text-primary duration-300 transition-colors mt-1' onClick={() => logout()}>
						Logout <IoExitOutline className="icon" 
						style={{ display: 'inline-block', marginLeft: 18, marginBottom: 3}} />
					</Link>
					)}
					</div>
			)} 
		</div>
	)
}

export default HeaderProfile
