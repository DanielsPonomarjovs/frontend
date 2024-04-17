'use client'
import { useAuth } from '@/hooks/useAuth'
import Modal from '@/ui/modal/Modal'
import Image from 'next/image'
import { useState } from 'react'
import LeaveOrderForm from './LeaveOrderForm'
import styles from './Maindata.module.scss'

interface IUser {
	id: number
}

export default function MainData({ id }: IUser) {
	const [isModalOpen, setModalOpen] = useState(false)
	const [success, setSuccess] = useState(false)
	const { user } = useAuth()
	const handleCloseModal = () => {
		setModalOpen(false)
	}

	const imageUrl =
		'https://images.unsplash.com/photo-1621961458348-f013d219b50c'

	return (
		<div>
			<section id='start'>
				<div className='grid grid-cols-2 ml-10 mt-10 px-20 py-20'>
					<div className={styles.mb_info}>
						<div className={styles.notif}>
							<p> v3.1 released. </p>
						</div>

						<h1 className='font-semibold text-4xl'>
							Your data with real-time <br /> analytics
						</h1>

						<div className={`${styles.main_banner} ${styles.mb_info}`}>
							<h3 className='text-xs'>
								{' '}
								Harness the potential of Big Data analytics <br /> cloud
								Services and become a data-driven <br /> organization with
								Needle Tail
							</h3>
						</div>

						<div className={styles.main_banner}>
							<button className={styles.btn} onClick={() => setModalOpen(true)}>
								Start free trial
							</button>

							<button
								className={`${styles.btn} ${styles.btn_white} md:bg-green-400`}
							>
								{' '}
								Learn more
							</button>
						</div>
					</div>

					{user && (
						<Modal isOpen={isModalOpen} closeModal={handleCloseModal}>
							<LeaveOrderForm userId={id} />
						</Modal>
					)}

					<Image
						src={'https://i.imgur.com/GWGhIw8.png'}
						alt='Sample Image'
						height={600}
						width={600}
						className='mt-30 min-w-min'
					/>
				</div>
			</section>

			<section id='gradient'>
				<div className={styles.box}></div>
			</section>

			<section id='advantages'>
				<div className='container mx-auto py-48 px-3'>
					<div>
						<h1 className='text-4xl text-center font-bold mb-5'>
							{' '}
							Get actionable insights from <br /> Big Data in 3 steps{' '}
						</h1>
					</div>

					<div>
						<h1 className='text-sm text-gray-300 font-medium	text-center mb-5'>
							{' '}
							Amidst the ethereal glow of twilight, where shadows <br /> dance
							in silent reverence, lies a forgotten alley, veiled <br /> in
							secrets and whispers.{' '}
						</h1>
					</div>

					<div className='grid grid-cols-3 gap-4 px-20'>
						<div className='item_adv'>
							<div className='bg-red-100 relative flex justify-center'>
								<Image
									src={'https://source.unsplash.com/random/200x200?sig=3'}
									alt='Sample Image'
									height={250}
									width={250}
									className='ml-1 mt-5 rounded-md'
								/>
							</div>
							<div className='text-2xl text-extrabold text-center'>
								Data in real-time
							</div>
							<div className='descr ml-0.5 mt-5 text-gray-500 font-light text-center'>
								Data in real-time refers to the continuous flow of information
								generated and processed <br /> instantly, providing
								up-to-the-moment insights and feedback.
							</div>
						</div>

						<div className='item_adv'>
							<div className='bg-red-100 relative flex justify-center'>
								<Image
									src={'https://source.unsplash.com/random/200x200?sig=2'}
									alt='Sample Image'
									height={250}
									width={250}
									className='ml-1 mt-5 rounded-md'
								/>
							</div>
							<div className='text-2xl text-extrabold text-center'>
								Powerful Algorithms
							</div>
							<div className='descr ml-0.5 mt-5 text-gray-500 font-light text-center'>
								Harnessing the power of real-time data involves employing
								sophisticated algorithms capable of processing vast streams of
								information with speed and accuracy.
							</div>
						</div>

						<div className='item_adv'>
							<div className='bg-red-100 relative flex justify-center'>
								<Image
									src={'https://source.unsplash.com/random/200x200?sig=1'}
									alt='Sample Image'
									height={250}
									width={250}
									className='ml-1 mt-5 rounded-md'
								/>
							</div>
							<div className='text-2xl text-extrabold text-center'>
								Quick solutions
							</div>
							<div className='descr  ml-0.5 mt-5 text-gray-500 font-light text-center'>
								Quick solutions for harnessing real-time data involve
								implementing efficient algorithms such as stream processing
								frameworks like Apache Kafka or Apache Flink.
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
