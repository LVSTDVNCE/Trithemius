type TOptionProps = {
	value: string;
	text: string;
};

export const Option = ({ text, value }: TOptionProps) => {
	return <option value={value}>{text}</option>;
};
