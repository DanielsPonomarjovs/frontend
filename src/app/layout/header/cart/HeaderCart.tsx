'use client'
import { useMutation } from '@tanstack/react-query'
import cn from 'clsx'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { RiShoppingCartLine } from 'react-icons/ri'
import { useAuth } from '@/hooks/useAuth'
import SquareButton from '@/ui/button/SquareButton'
import { useCart } from '@/hooks/useCart'
import { useOutside } from '@/hooks/useOutside'
import { convertPrice } from '@/utils/convertPrice'
import styles from './Cart.module.scss'
import CartItem from './cart-item/CartItem'
import Link from 'next/link'

const Cart: FC = () => {
	const { isShow, setIsShow, ref } = useOutside(false)

	const { items, total } = useCart()
	const { user } = useAuth()
	

	return (
		<div className='relative' ref={ref}>
			{user && (
			<SquareButton
				Icon={RiShoppingCartLine}
				onClick={() => {
					setIsShow(!isShow)
				}}
				number={items.length}
				
			/>
			)}

		 {isShow && (
			<div
				className={styles.cartWrapper}>
				<div className='font-normal text-lg mb-5 text-center'>My cart</div>

				<div className={styles.cart}>
					{items.length ? (
						items.map(item => <CartItem item={item} key={item.id}  />)
					) : (
						<div className='font-light mt-3'>Cart is empty!</div>
					)}
				</div>
				<div className={styles.footer}>
					<div>Total:</div>
					<div>{convertPrice(total)}</div>
				</div>
				{!!items.length && (
					<div className='text-center mt-7 mb-5'>
						<Link className='btn btn-white' href='/checkout' onClick={ () => setIsShow(false)}>
							Go to checkout
						</Link>
						</div>
				)}
			</div>
		 )}
		</div>
	)
}

export default Cart
