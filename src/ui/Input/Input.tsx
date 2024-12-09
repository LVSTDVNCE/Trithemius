import styles from './Input.module.css';

type TInputProps = {
	type: string;
	value: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder: string;
};

export const Input = ({ type, value, onChange, placeholder }: TInputProps) => {
	return (
		<input
			className={styles.input}
			type={type}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
		/>
	);
};
