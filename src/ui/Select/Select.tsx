import { ReactNode, FC } from 'react';
import styles from './Select.module.css';

type TSelectProps = {
	value: string;
	onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	children: ReactNode;
};

export const Select: FC<TSelectProps> = ({ value, onChange, children }) => {
	return (
		<select className={styles.select} value={value} onChange={onChange}>
			{children}
		</select>
	);
};
