import type { Metadata } from 'next';
import { type ReactNode } from 'react';
import { Vazirmatn } from 'next/font/google';

import HeaderComponent from '@/components/header/header.component';

import './globals.css';

const vazirMant = Vazirmatn({
	subsets: ['latin', 'arabic'],
	display: 'swap',
	weight: '400'
});

export const metadata: Metadata = {
	title: 'دکتر من',
	description: 'پلتفرم جامع جستجوی دکتر و رزرو نوبت آنلاین'
};

export default function RootLayout({
	children
}: Readonly<{
	children: ReactNode;
}>): ReactNode {
	return (
		<html lang="fa" dir="rtl" className={vazirMant.className}>
			<body>
				<HeaderComponent />
				{children}
			</body>
		</html>
	);
}
