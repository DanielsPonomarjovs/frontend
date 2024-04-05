
import axios from 'axios'
import Cookies from 'js-cookie'
import { axiosClassic, instance } from '@/api/api.interceptor'
import { ICategory } from '@/types/category.interface'

const CATEGORIES = 'categories'

export const CategoryService = {
	async getAll() {
		try {
			const categories = await instance<ICategory[]>({
					url: CATEGORIES,
					method: 'GET',
			});// Вывод результата в консоль
			return categories; // Возвращаем данные
	} catch (error) {
			console.error('Ошибка при получении данных:', error);
			throw error; // Пробрасываем ошибку дальше
	}
},


	async getById(id: string | number) {
		return instance<ICategory[]>({
			url: `${CATEGORIES}/${id}`,
			method: 'GET',
		}) 
	},

	async getBySlug(slug: string) {
		return axiosClassic<ICategory>({
			url: `${CATEGORIES}/by-slug/${slug}`,
			method: 'GET',
		}) 
	},

	async create() {
		return instance<ICategory>({
			url: CATEGORIES,
			method: 'POST',
		}) 
	},

	async update(id: string | number, name: string) {
		return instance<ICategory>({
			url: `${CATEGORIES}/${id}`,
			method: 'PUT',
			data: {name}
		}) 
	},

	async delete(id: string | number) {
		return instance<ICategory>({
			url: `${CATEGORIES}/${id}`,
			method: 'DELETE'
		}) 
	},


}

