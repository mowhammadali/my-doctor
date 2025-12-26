import { type ReactNode } from 'react';

import GlobalSearchBox from '@/components/global-search-box/global-search-box.component';
import MingcuteHospitalLine from '@/icons/MingcuteHospitalLine';

import styles from './page.module.css';

export default function Home(): ReactNode {
	return (
		<div className={styles.home}>
			<h1>
				<MingcuteHospitalLine />
				دکتر من
			</h1>
			<GlobalSearchBox />
			<div className={styles.history}>
				<div>اخرین جستجوی شما</div>
				<ul>
					<li>ارتوپد</li>
					<li>قلب و عروق</li>
				</ul>
			</div>
		</div>
	);
}
