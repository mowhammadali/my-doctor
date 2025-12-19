import localFont from 'next/font/local';

export const vazirFont = localFont({
	src: [
		{
			path: '../assets/fonts/Vazir-Regular.woff',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../assets/fonts/Vazir-Regular.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../assets/fonts/Vazir-Regular.eot',
			weight: '400',
			style: 'normal',
		},
	],
})