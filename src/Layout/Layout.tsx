import { Header } from './Header/Header';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer/Footer';
import styles from './Layout.module.css';

export const Layout = () => {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<Outlet />
			</main>
			<Footer />
		</>
	);
};
