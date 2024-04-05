import { IProduct } from '@/types/product.interface'
import { FaCar } from 'react-icons/fa'
import { FaGasPump } from 'react-icons/fa6'
import { GiCarKey, GiGearStickPattern } from 'react-icons/gi'
import { IoIosColorPalette } from 'react-icons/io'
import { IoSpeedometerOutline } from 'react-icons/io5'
import { TbEngine } from 'react-icons/tb'

interface IconTextColumnProps {
	icon: React.ReactNode // You can refine this type based on the actual type of icon you're passing
	text: string | number
}

interface IProductInformation {
	product: IProduct
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

export default function ProductInformation({ product }: IProductInformation) {
	return (
		<div className='grid grid-cols-2 mt-10 pl-2'>
			<div className='row'>
				<div>
					<IconTextColumn icon={<FaCar />} text={product.model} />
					<IconTextColumn
						icon={<IoSpeedometerOutline />}
						text={product.distancekm}
					/>
					<IconTextColumn icon={<TbEngine />} text={product.engine} />
					<IconTextColumn icon={<FaGasPump />} text={product.gas} />
				</div>
			</div>
			<div className='row'>
				<div>
					<IconTextColumn icon={<GiGearStickPattern />} text={product.gear} />
					<IconTextColumn icon={<GiCarKey />} text={product.keys} />
					<IconTextColumn icon={<FaCar />} text={product.origin} />
					<IconTextColumn icon={<IoIosColorPalette />} text={product.color} />
				</div>
			</div>
		</div>
	)
}
