import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import Heading from '@/ui/Heading'
import Loader from '@/ui/Loader'
import Button from '@/ui/button/Button'
import { IOrderFields } from './order-fields.interface'
import { OrderOfferService } from '@/services/order-offer.service'



const LeaveOrderForm: FC<{userId: number}> = ({userId}) => {
	const [showSuccessMessage, setShowSuccessMessage] = useState(false)
	const queryClient = useQueryClient()

	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<IOrderFields> ({
		mode: 'onChange'
	})

	const { mutate, isSuccess, isPending} = useMutation({
		mutationKey: ['leave orderoffer'],
		mutationFn: (data: IOrderFields) => OrderOfferService.leave(userId, data),
		onSuccess: () => { 
			queryClient.refetchQueries({
				queryKey: ['get orderoffer', userId]})
				setShowSuccessMessage(true);
			setTimeout(() => {
				setShowSuccessMessage(false);
			}, 3000);
			}
		} 
	)

	const onSubmit: SubmitHandler<IOrderFields> = data => {
		mutate(data)
		reset()
	}

	if(isSuccess) return <div> Order was successfully published </div>
	
	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Heading className='text-center mb-4'>
					Solve your problems
				</Heading>

				{isPending ? (
					<Loader />
				) : (
					<div>
					<textarea {...formRegister('text', {
						required: 'Fill empty fields'
					})}
					placeholder='Write your wishes here...'
					className='rounded-md border border-gray/70 bg-white p-3 block resize-none w-full text-sm'
					/>
					
					{Object.entries(errors) && (
							<ul className='text-red animate-opacity text-sm list-disc pl-4 mt-3'>
								{Object.entries(errors).map(([_, error]) => (
									<li> { error?.message} </li>
								))}
							</ul>
						)
					}
								<div className='text-center mb-2 mt-8'>
							<Button type='submit' variant='orange'>
								Get in line
							</Button>
						</div>
					</div>
				)}
			</form>
		</div>
	)
}

export default LeaveOrderForm