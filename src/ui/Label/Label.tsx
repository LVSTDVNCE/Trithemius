import styles from './Lable.module.css';

type TLabelProps = {
	text: string;
};

export const Label = ({ text }: TLabelProps) => {
	return (
		<label className={styles.label}>
			<i className={styles.animation}></i>
			{text}
			<i className={styles.animation}></i>
		</label>
	);
};
