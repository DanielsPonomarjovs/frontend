import { FC } from 'react'
import { BsCaretLeftSquare, BsCaretRightSquare } from 'react-icons/bs'
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

import { useActions } from '@/hooks/useActions'

import styles from './Carousel.module.scss'

const CarouselNavigation: FC = () => {
	const { nextSlide } = useActions()

	return (
		<div className={styles.nav}>
			<button onClick={() => nextSlide({ carouselLength: 2 })}>
			<FaChevronCircleLeft size={25} className='text-white hover:text-[#e17282]' />
			</button>

			<button onClick={() => nextSlide({ carouselLength: 2 })}>
			<FaChevronCircleRight size={25} className='text-white hover:text-[#e17282]' />
			</button>
				
		</div>
	)
}

export default CarouselNavigation
