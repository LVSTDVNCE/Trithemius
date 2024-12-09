import styles from './TextArea.module.css';

type TTextAreaProps = {
	value: string;
	rows: number;
	onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	readOnly?: boolean;
};

export const TextArea = ({
	value,
	onChange,
	rows,
	readOnly,
}: TTextAreaProps) => {
	return (
		<textarea
			className={styles.textarea}
			value={value}
			onChange={onChange}
			rows={rows}
			readOnly={readOnly}
		/>
	);
};
