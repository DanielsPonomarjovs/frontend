import { IProduct } from '@/types/product.interface'
import { convertPrice } from '@/utils/convertPrice'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { FaCar } from 'react-icons/fa'
import { IoSpeedometerOutline } from 'react-icons/io5'
import { GiCarKey, GiGearStickPattern } from 'react-icons/gi'
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
			className='text-white'
		>
			<div style={{ marginRight: '10px' }}>{icon}</div>
			<div className='truncate text-xs'>{text}</div>
		</div>
	)
}

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<div className='grid grid-cols-1 mt-1'>
			{product && (
				<>
					<div className="rounded-lg overflow-hidden shadow-lg h-max bg-primary">
						<Link href={`/product/${product.slug}`}>
								<Image
									src={product.images[0]}
									alt={product.name}
									width={400}
  								height={400}
									className='w-full h-48 overflow-visible rounded-xl gap-5'
									priority
									draggable={false}
								/>
						</Link>
					

					<div className='ml-3'>
					<Link href={`/product/${product.slug}`}>
						<h1 className='truncate text-white'> {product.name} </h1>
					</Link>
					<Link
						href={`/category/${product.category.slug}`}
						className='text-aqua text-xl'
					>
						{product.category.name}
					</Link>
					<div className='grid grid-cols-2 center mt-1'>
						<div className='row'>
							<div>
								<IconTextColumn icon={<FaCar />} text={product.gas} />
								<IconTextColumn
									icon={<GiGearStickPattern />}
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
					<div className='grid grid-cols-1'>
						<div className='row'>
							<div className='text-xl text-white'>
								{' '}
								{convertPrice(product.price)}{' '}
							</div>{' '}
						</div>

						<div className='grid grid-cols-2'>
						<div className='row'> 
 						<Link href={`/product/${product.slug}`}>
						<h1 className='text-xs truncate text-white mt-3'> View Details </h1>
						</Link> 
						</div>

						<div className='row'>
						<div className='text-right mr-5'>
								
								<FavoriteButton productId={product.id} />
							</div>
						</div>
					</div>
		
							
			
					</div>
					</div>
					</div>
				</>
			)}
		</div>

	)
}

export default ProductItem
