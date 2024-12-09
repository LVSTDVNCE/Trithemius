import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from './pages/Home/Home';
import { NoMatch } from './pages/NoMatch/NoMatch';
import { About } from './pages/About/About';

export const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='*' element={<NoMatch />} />
			</Route>
		</Routes>
	);
};
