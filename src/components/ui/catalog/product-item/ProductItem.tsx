import { IProduct } from '@/types/product.interface'
import { convertPrice } from '@/utils/convertPrice'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { FaCar } from 'react-icons/fa'
import { IoSpeedometerOutline } from 'react-icons/io5'
import { TbEngine } from 'react-icons/tb'
import FavoriteButton from './FavoriteButton'
import ProductRating from './ProductRating'

interface IconTextColumnProps {
	icon: React.ReactNode // You can refine this type based on the actual type of icon you're passing
	text: string | number
}

const IconTextColumn: React.FC<IconTextColumnProps> = ({ icon, text }) => {
	return (
		<div
			style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}
		>
			<div style={{ marginRight: '10px' }}>{icon}</div>
			<div>{text}</div>
		</div>
	)
}

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<div className='animation-scaleIn'>
			{product && (
				<>
					<div className='bg-white rounded-xl relative overflow-hidden'>
						<div className='absolute top-2 right-5 z-1'>
							<FavoriteButton productId={product.id} />
						</div>

						<Link href={`/product/${product.slug}`}>
							<div className='bg-white h-[220px] relative rounded-md'>
								<Image
									width={400}
									height={400}
									src={product.images[0]}
									alt={product.name}
									className='block mx-auto'
								/>
							</div>
						</Link>
					</div>
					<Link href={`/product/${product.slug}`}>
						<h3 className='mt-2 font-semibold'> {product.name} </h3>
					</Link>
					<Link
						href={`/category/${product.category.slug}`}
						className='text-aqua text-xs mb-2'
					>
						{product.category.name}
					</Link>
					<div className='grid grid-cols-2'>
						<div className='row'>
							<div>
								<IconTextColumn icon={<FaCar />} text={product.gas} />
								<IconTextColumn
									icon={<IoSpeedometerOutline />}
									text={product.gear}
								/>
							</div>
						</div>

						<div className='row'>
							<div>
								<IconTextColumn icon={<TbEngine />} text={product.engine} />
								<IconTextColumn
									icon={<IoSpeedometerOutline />}
									text={product.distancekm}
								/>
							</div>
						</div>
					</div>{' '}
					<ProductRating product={product} isText />
					<div className='text-xl font-semibold'>
						{' '}
						{convertPrice(product.price)}{' '}
					</div>{' '}
				</>
			)}
		</div>
	)
}

export default ProductItem
