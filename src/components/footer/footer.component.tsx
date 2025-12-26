import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import certificateImage from '@/assets/logo/certificate.svg';
import enamadImage from '@/assets/logo/enamad.svg';
import IDKImage from '@/assets/logo/idk.svg';
import MingcuteYoutubeFill from '@/icons/MingcuteYoutubeFill';
import MingcuteTelegramFill from '@/icons/MingcuteTelegramFill';
import MingcuteLinkedinFill from '@/icons/MingcuteLinkedinFill';

import styles from './footer.module.css';

export default function FooterComponent(): ReactNode {
	return (
		<footer className={styles.footer}>
			<div className={styles.writings}>
				<h1>دکتر من</h1>
				<p>
					تجربه مشاوره آنلاین و دریافت نوبت از بهترین پزشکان و
					بیمارستان های ایران
				</p>
			</div>
			<div className={styles.visuals}>
				<ul className={styles.certificates}>
					<li>
						<Link href="#">
							<Image src={certificateImage} alt="logo" />
						</Link>
					</li>
					<li>
						<Link href="#">
							<Image src={enamadImage} alt="logo" />
						</Link>
					</li>
					<li>
						<Link href="#">
							<Image src={IDKImage} alt="logo" />
						</Link>
					</li>
				</ul>
				<ul className={styles.socials}>
					<li>
						<Link href="#">
							<MingcuteYoutubeFill />
						</Link>
					</li>{' '}
					<li>
						<Link href="#">
							<MingcuteTelegramFill />
						</Link>
					</li>
					<li>
						<Link href="#">
							<MingcuteLinkedinFill />
						</Link>
					</li>
				</ul>
			</div>
			<div className={styles.rights}>
				<p>
					تمامی حقوق مادی و معنوی این وب سایت ، خدمات و محتوای آن
					مربوط به من میباشد.
				</p>
			</div>
		</footer>
	);
}
