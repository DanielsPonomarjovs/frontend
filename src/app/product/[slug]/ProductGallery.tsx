import cn from 'clsx'
import Image from 'next/image'
import { useState } from 'react'

interface IProductGallery {
	images: string[]
}

export function ProductGallery({ images }: IProductGallery) {
	const [activeIndex, setActiveIndex] = useState(0)

	return (
		<div className="relative">
			<div className="relative"
			style={{ width: '700px', height: '400px', overflowY: 'visible', whiteSpace: 'normal' }}
			>
			<Image
				src={images[activeIndex]}
				alt=''
				width={700}
				height={500}
				className='relative flex h-96 overflow-hidden rounded-xl'
				priority
				draggable={false}
			/>
			</div>
			<div
				className='mt-20'
				style={{ width: 'auto', height: '300px' }}
			>
				{images.map((image, index) => (
					<button
						key={index}
						onClick={() => setActiveIndex(index)}
						className={cn(
							'duration-100 hover:shadow-md mr-5 last:mr-0 border-b-2 border-solid transition-all rounded-lg overflow-hidden inline-block',
							{
								'shadow-md border-primary': index === activeIndex,
								'border-transparent': index !== activeIndex
							}
						)}
					>
						<div className="bg-white h-[110px] relative rounded-md flex justify-center items-center">
						<Image
							draggable={false}
							src={image}
							alt=''
							width={200}
							height={200}
							priority
							style={{objectFit: 'cover'}}
						/>
						</div>
					</button>
				))}
			</div>
		</div>
	)
}
