import type { Metadata } from 'next';
import { Vazirmatn } from 'next/font/google';
import './globals.css';
import { type ReactNode } from 'react';

const vazirMant = Vazirmatn({
	subsets: ['latin', 'arabic'],
	display: 'swap'
});

export const metadata: Metadata = {
	title: 'دکتر من',
	description: 'پلتفرم جامع جستجوی دکتر و رزرو نوبت آنلاین'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>): ReactNode {
	return (
		<html lang="fa" dir="rtl" className={vazirMant.className}>
			<body>{children}</body>
		</html>
	);
}
