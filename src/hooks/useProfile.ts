import { useQuery } from '@tanstack/react-query'

import { errorCatch } from '@/api/api.helper'

import { useAuth } from './useAuth'
import { UserService } from '@/services/user.service'

export const useProfile = () => {
	const { user } = useAuth()

	const { data} = useQuery({
		queryKey: ['get profile'],
		queryFn: () => {
			return UserService.getProfile()
		},
		select: ({ data }) => data,
		enabled: !!user
	})
	return { profile: data }
};