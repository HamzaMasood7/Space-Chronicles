import axios from 'axios';

const api = axios.create({
	baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : (process.env.NEXT_PUBLIC_API_URL as string),
});

interface TodayPic {
	title: string;
	explanation: string;
	url: string;
	hdUrl: string;
	date: string;
}

export async function getTodayPic() {
	const res = await api.get('/earth/today');
	return res.data as TodayPic;
}
