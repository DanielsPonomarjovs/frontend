'use client'
import { FC, useState } from 'react'
import {  useRouter, useSearchParams } from 'next/navigation';
import { BsSearch } from 'react-icons/bs'
import { useActions } from '@/hooks/useActions'
import { useFilters } from '@/app/explorer/useFilters'
import { useDebounce } from '@/hooks/useDebounce'

const Search: FC = () => {
	const { push } = useRouter()
	const [searchTerm, setSearchTerm] = useState<string>('')
	const { updateQueryParams} = useFilters()
	const searchParams = useSearchParams()
	
	
	const handleChange = (e: React.ChangeEvent<any>) => {
		const value = e.target.value;
		console.log(value)
		if (value) {
			setSearchTerm(value);
			push(`/explorer?searchTerm=${value}`);
			updateQueryParams('searchTerm', value);
		} else {
			updateQueryParams('searchTerm', '');
			setSearchTerm(value);
			push(`/explorer/`);
		}
  };

	return (
		<div className=''>
			<div
				className='border border-solid border-gray/10 grid w-1/3 rounded-xl overflow-hidden'
				style={{
					gridTemplateColumns: '1fr 0.1fr', marginTop: '6px'
				}}
			>			

				<input
					className='bg-grey text-sm py-2 px-4 text-black outline-none'
					value={searchTerm}
					onChange={handleChange}
					placeholder='Search...'
				/>
				<button
					onClick={handleChange}
					className='bg-[#72E1D1] text-white flex items-center justify-center p-2.5'
				>
					<BsSearch style={{ color: 'black'}} />
				 </button>
			</div>
		</div>
	)
}

export default Search
