export const convertPrice = (price: number) => {
	return price.toLocaleString('ru-RU', {
		style: 'currency',
		currency: 'USD',
	})
}