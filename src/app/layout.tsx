import type { Metadata } from 'next';
import { type ReactNode } from 'react';

import { vazirFont } from '@/fonts/fonts';
import HeaderComponent from '@/components/header/header.component';
import FooterComponent from '@/components/footer/footer.component';

import './globals.css';

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
		<html lang="fa" dir="rtl" className={vazirFont.className}>
			<body>
				<HeaderComponent />
				<main>{children}</main>
				<p className="tagline">
					نوبت دهی پزشکی ، سامانه نوبت دهی اینترنتی بیمارستان و پزشکان
				</p>
				<FooterComponent />
			</body>
		</html>
	);
}
