import { FC } from 'react'
import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'
import { IProduct } from '@/types/product.interface'
import Button from '@/ui/button/Button'
import { useAuth } from '@/hooks/useAuth'


const AddToCartInline: FC<{ product: IProduct}> = ({
	product
}) => {
	const { addToCart, removeFromCart} = useActions()
	const { items } = useCart()
	const { user } = useAuth()

	const currentElement = items.find(
		cartItem => cartItem.product.id === product.id
	)

	return (
		<div className='mt-5'>
			{user && (
			<Button
				variant='white'
				style={{ backgroundColor: '#72E1D1', color: 'white', borderColor: '#72E1D1' }}
				onClick={() => currentElement 
								? removeFromCart({ id: currentElement.id })
								: addToCart({
									product,
									quantity: 1,
									price: product.price
								})
							
							}
							>
								{currentElement ? 'Remove from cart' : 'Add to cart'}
							</Button>
				)}
				</div>

	)
}

export default AddToCartInline