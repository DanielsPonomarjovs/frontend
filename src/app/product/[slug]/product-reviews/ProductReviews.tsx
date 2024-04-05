import { useAuth } from '@/hooks/useAuth'
import { IReview } from '@/types/review.interface'
import Heading from '@/ui/Heading'
import { useState } from 'react'
import ReviewItem from './ReviewItem'
import Modal from '@/ui/modal/Modal'
import LeaveReviewForm from './LeaveReviewForm'


interface IProductReviews {
	reviews: IReview[]
	
	productId: number
}

export default function ProductReviews({
	reviews, productId}: IProductReviews)
	{
		const [isModalOpen, setModalOpen] = useState(false)
		const { user } = useAuth()

		

		return (
			<section id='reviews' className='mt-20'>
				<div className='mb-9'>
					<Heading className='mb-3'>
						Reviews: 
					</Heading>
					{ user && (
						<button className='text-aqua' onClick={() => setModalOpen(true)}>
							Leave a review
						</button>
					)}
				</div>

				{ user && (
					<Modal isOpen={isModalOpen} closeModal={() => setModalOpen(false)}>
						<LeaveReviewForm productId={productId} />
					</Modal>
				)}

				<div className='grid grid-cols-4 gap-10'>
					{reviews.map(review => (
						<ReviewItem key={review.id} review={review} />
					))}
				</div>
			</section>
		)
	}