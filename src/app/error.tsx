'use client';

import { type ReactNode } from 'react';

import styles from './error.module.css';
import Image from 'next/image';

import errorImage from '@/assets/illustrations/error.svg';

type PropsType = {
	error: Error & { digest?: string };
	reset: () => void;
};

export default function ErrorPage({ error, reset }: PropsType): ReactNode {
	return (
		<div className={styles.error}>
			<div className={styles.content}>
				<div className={styles.writings}>
					<p>خطای ناشناس</p>
					<p> یک خطای غیر منتظره دریافت کریم</p>
					<p>با عرض پوزش لطفا با تیم پشتیبانی تماس بفرمایید.</p>
				</div>
				<div className={styles.retry}>
					<button onClick={reset}>تلاش مجدد</button>
				</div>
				<div className={styles.visuals}>
					<Image src={errorImage} alt="" />
				</div>
				<div className={styles['error-logs']}>
					<details>
						<summary>مشاهده لاگ خطا</summary>
						<pre>{error.stack}</pre>
					</details>
				</div>
			</div>
		</div>
	);
}
