import styles from './Footer.module.css';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<p className={styles.footer__para}>
				Made with ❤️ by{' '}
				<a target='_blank' href='https://github.com/LVSTDVNCE'>
					LVSTDVNCE
				</a>{' '}
				and{' '}
				<a target='_blank' href='https://github.com/Cha11en9er'>
					Cha11en9er
				</a>
			</p>
		</footer>
	);
};
