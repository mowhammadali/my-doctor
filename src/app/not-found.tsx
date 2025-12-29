import { type ReactNode } from 'react';
import Image from 'next/image';

import notFoundImage from '@/assets/illustrations/not-found.svg';

import styles from './not-found.module.css';
import GlobalSearchBox from '@/components/global-search-box/global-search-box.component';

export default function NotFound(): ReactNode {
	return (
		<div className={styles['not-found']}>
			<div className={styles.content}>
				<div className={styles['writings']}>
					<p>404</p>
					<p>صفحه مورد نظر یافت نشد.</p>
					<p>
						با عرض پوزش ، لطفا از طریق کادر جستجو ، پزشک یا یا مرکز
						درمانی مورد نظر خود را جستجو کنید.{' '}
					</p>
				</div>
				<div className={styles['visuals']}>
					<Image src={notFoundImage} alt="" />
				</div>
				<div className={styles['search']}>
					<GlobalSearchBox />
				</div>
			</div>
		</div>
	);
}
