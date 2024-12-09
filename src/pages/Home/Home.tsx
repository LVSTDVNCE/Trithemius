import { useState } from 'react';
import { Button, Input, Label, Select, TextArea, Option } from '../../ui';
import styles from './Home.module.css';

export const Home = () => {
	const [inputText, setInputText] = useState('');
	const [key, setKey] = useState('');
	const [outputText, setOutputText] = useState('');
	const [isEncrypting, setIsEncrypting] = useState(true);

	const trithemiusCipher = (
		text: string,
		key: string,
		encrypt: boolean
	): string => {
		if (!key) return text;

		const keyNumbers = key.split('').map(char => {
			if (char.match(/[a-z]/i)) return char.toLowerCase().charCodeAt(0) - 97;
			if (char.match(/[а-яё]/i)) return char.toLowerCase().charCodeAt(0) - 1072;
			return 0;
		});

		const textChars = text.split('');
		const result: string[] = [];

		for (let i = 0; i < textChars.length; i++) {
			const char = textChars[i];
			if (char.match(/[a-zA-Zа-яА-ЯёЁ]/)) {
				const isUpperCase = char === char.toUpperCase();
				const isCyrillic = char.match(/[а-яА-ЯёЁ]/) !== null;
				const base = isCyrillic
					? isUpperCase
						? 1040
						: 1072
					: isUpperCase
					? 65
					: 97;
				const charCode = char.charCodeAt(0) - base;

				const keyShift = keyNumbers[i % keyNumbers.length];
				const newCharCode = encrypt
					? (charCode + keyShift + i) % (isCyrillic ? 33 : 26)
					: (charCode - keyShift - i + (isCyrillic ? 33 : 26)) %
					  (isCyrillic ? 33 : 26);

				result.push(String.fromCharCode(newCharCode + base));
			} else {
				result.push(char);
			}
		}

		return result.join('');
	};

	const handleTransform = () => {
		const transformedText = trithemiusCipher(inputText, key, isEncrypting);
		setOutputText(transformedText);
	};
	return (
		<section className={styles.section}>
			<div className={styles.section__wrapper}>
				<Label text={'Введите текст:'} />
				<TextArea
					value={inputText}
					onChange={e => setInputText(e.target.value)}
					rows={4}
				/>
			</div>
			<div className={styles.section__wrapper}>
				<Label text={'Ключ (только буквы):'} />
				<Input
					type='text'
					value={key}
					onChange={e => setKey(e.target.value.toLowerCase())}
					placeholder='Введите ключ'
				/>
			</div>
			<div className={styles.section__wrapper}>
				<Label text={'Режим:'} />
				<Select
					value={isEncrypting ? 'encrypt' : 'decrypt'}
					onChange={e => setIsEncrypting(e.target.value === 'encrypt')}
				>
					<Option value='encrypt' text='Шифрование' />
					<Option value='decrypt' text='Расшифрование' />
				</Select>
			</div>
			<Button text={'преобразовать'} onClick={handleTransform} />
			<div className={styles.section__wrapper}>
				<Label text={'Результат:'} />
				<TextArea value={outputText} readOnly={true} rows={4} />
			</div>
		</section>
	);
};
