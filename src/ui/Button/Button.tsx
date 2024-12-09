import styles from './Button.module.css';

type TButtonProps = {
	text?: string;
	onClick?: () => void;
};

export const Button = ({ text, onClick }: TButtonProps) => {
	return (
		<button className={styles.button} onClick={onClick}>
			{text}
		</button>
	);
};
