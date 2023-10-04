'use client';

import { getTodayPic } from '@/client/api';
import { useQuery } from 'react-query';

export default function PictureOfDay() {
	const { data, isLoading, error } = useQuery('today-pic', getTodayPic);

	// when the data is loading
	if (isLoading) {
		return (
			<button type='button' className='btn btn-square'>
				<span className='loading loading-spinner' />
			</button>
		);
	}

	// When there is no-data or error occured
	if (!data || error) {
		return <div>Error occured</div>;
	}

	return (
		<div className='card w-96 bg-base-100 shadow-xl'>
			<figure>
				<img src={data.hdUrl} alt={data.title} />
			</figure>
			<div className='card-body text-center'>
				<h2 className='card-title'>
					{data.title}
					{/* <div className="badge badge-secondary">{data.explanation}</div> */}
				</h2>
				{/* <p>{data.explanation}</p> */}
				<div className='card-actions justify-end'>
					{/* <div className="badge badge-outline">{data.explanation}</div> */}
					<div className='badge badge-outline'>{data.date}</div>
				</div>
			</div>
		</div>
	);
}
