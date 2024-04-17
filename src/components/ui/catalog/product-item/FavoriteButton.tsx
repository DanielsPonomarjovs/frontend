import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FC } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { FaRegBookmark } from "react-icons/fa6";
import { useProfile } from '@/hooks/useProfile'
import { GiTechnoHeart } from "react-icons/gi";
import { BsArrowThroughHeart } from "react-icons/bs";
import { BsHearts } from "react-icons/bs";
import { UserService } from '@/services/user.service'
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";
import { useAuth } from '@/hooks/useAuth'

const FavoriteButton: FC<{ productId: number }> = ({ productId }) => {

	const { profile } = useProfile()
	const queryClient = useQueryClient()
	const { user } = useAuth()

const { mutate } = useMutation(
	{
		mutationKey: ['toggle favorite'],
		mutationFn: () => UserService.toggleFavorite(productId),
		onSuccess: () => {
			queryClient.invalidateQueries({queryKey:['get profile']})
	}
		}
	)

	if (!profile) return null

	const isExists = profile.favorites.some(favorite => favorite.id === productId)

	return (
		
		<div>
			{user && (
			<button onClick={() => mutate()} className='text-primary'>
				{isExists ? <FaHeart size={40} stroke={ "grey"} strokeWidth={0.5} style={{ color: '#e17282'}}  /> : <FaHeart size={40} stroke={ "grey"} strokeWidth={0.3} style={{ color: 'grey'}}  />}	
			</button>
			)}
		</div>
	)
}

export default FavoriteButton
