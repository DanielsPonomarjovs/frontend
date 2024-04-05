'use client'
import Image from 'next/image'
import { FC } from 'react'
import { AiOutlineLogin } from "react-icons/ai";

import { useProfile } from '@/hooks/useProfile'
import { useOutside } from '@/hooks/useOutside'
import Link from 'next/link'

const HeaderProfile: FC = () => {
	const { isShow, ref, setIsShow} = useOutside(false)

	return (
		<div className='relative' ref={ref}>
			<button onClick={()=> setIsShow(!isShow)}>
			</button>
			{isShow && (
				<div
					className='absolute w right-5 '
					style={{
						top: 'calc(100% + 1rem)'
					}}
				>
					<Link
						href='/auth'
						className='bg-white shadow py-2 px-4 block w-full rounded-md hover:text-primary duration-300 transition-colors'
					>
						Login
					</Link>
					</div>
			)} 
		</div>
	)
}

export default HeaderProfile
