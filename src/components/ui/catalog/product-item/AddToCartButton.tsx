import { FC } from 'react'
import { RiShoppingCartFill, RiShoppingCartLine } from 'react-icons/ri'

import { useActions } from '@/../src/hooks/useActions'
import { useCart } from '@/../src/hooks/useCart'
import { IProduct } from '@/../src/types/product.interface'
import { useAuth } from '@/hooks/useAuth'

const AddToCartButton: FC<{ product: IProduct }> = ({ product }) => {
	const { addToCart, removeFromCart } = useActions()
	const { items } = useCart()
	const { user } = useAuth()
	console.log(user)
	const currentElement = items.find(
		cartItem => cartItem.product.id === product.id
	)

	return (
		<div>
			{user && (
			<button
				className='text-secondary'
				onClick={() =>
					currentElement
						? removeFromCart({ id: currentElement.id })
						: addToCart({
								product,
								quantity: 1,
								price: product.price
						  })
				}
			>
				{currentElement ? <RiShoppingCartFill size={30} /> : <RiShoppingCartLine size={30} />}
			</button>
			)}
		</div>
	)
}

export default AddToCartButton
