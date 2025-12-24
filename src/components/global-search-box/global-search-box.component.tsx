import { type ReactNode } from 'react';
import MingcuteSearch3Line from '@/icons/MingcuteSearch3Line';
import MingcuteLocation2Line from '@/icons/MingcuteLocation2Line';

import styles from './global-search-box.module.css';

export default function GlobalSearchBox(): ReactNode {
	return (
		<div className={styles['global-search-box']}>
			<div className={styles.prefix}>
				<MingcuteSearch3Line />
			</div>
			<input type="text" />
			<div className={styles.divider}></div>
			<div className={styles.suffix}>
				<button>
					<MingcuteLocation2Line />
					همه شهرها
				</button>
			</div>
		</div>
	);
}
