'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import clsx from 'clsx';

import styles from './header.module.css';

export default function HeaderComponent(): ReactNode {
	const pathname = usePathname();

	return (
		<nav className={styles.nav}>
			<ul>
				<li>
					<Link
						href="/"
						className={clsx(pathname === '/' && styles.active)}
					>
						خانه
					</Link>
				</li>
				<li>
					<Link
						href="/dashboard"
						className={clsx(
							pathname === '/dashboard' && styles.active
						)}
					>
						داشبورد
					</Link>
				</li>
			</ul>
			<button className={styles.btn}>ورود | ثبت نام</button>
		</nav>
	);
}
