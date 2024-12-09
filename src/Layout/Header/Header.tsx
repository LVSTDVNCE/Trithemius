import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export const Header = () => {
	return (
		<header className={styles.header}>
			<Link to='/about'>
				<section className={styles.heading}>
					<h1 className={styles.title}>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						Шифр Тритемиуса
					</h1>
				</section>
			</Link>
		</header>
	);
};
