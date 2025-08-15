import { useState, FormEvent } from 'react';

import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Text } from '../text';
import { Select } from '../select';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';
import { Spacing } from '../spacing';

import { fontFamilyOptions } from 'src/constants/articleProps';
import { fontSizeOptions } from 'src/constants/articleProps';
import { fontColors } from 'src/constants/articleProps';
import { backgroundColors } from 'src/constants/articleProps';
import { contentWidthArr } from 'src/constants/articleProps';

import { OptionType } from 'src/constants/articleProps';

import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = () => {
	const [ isAsideOpen, setIsAsideOpen ] = useState<boolean>(false);
	const [ fontFamily, setFontFamily ] = useState<OptionType>(fontFamilyOptions[0]);
	const [ fontSize, setFontSize ] = useState<OptionType>(fontSizeOptions[0]);
	const [ fontColor, setFontColor ] = useState<OptionType>(fontColors[0]);
	const [ backgroundColor, setBackgroundColor ] = useState<OptionType>(backgroundColors[0]);
	const [ contentWidth, setContentWidth ] = useState<OptionType>(contentWidthArr[0]);

	const fontFamilyOnChange = (selected: OptionType) => {
		setFontFamily(selected);
		console.log(`Choosed font family: ${selected.title}.`);
	}

	const fontSizeOnChange = (selected: OptionType) => {
		setFontSize(selected);
		console.log(`Choosed font size: ${selected.title}.`);
	}

	const fontColorOnChange = (selected: OptionType) => {
		setFontColor(selected);
		console.log(`Choosed font color: ${selected.title}.`);
	}

	const backgroundColorOnChange = (selected: OptionType) => {
		setBackgroundColor(selected);
		console.log(`Choosed background color: ${selected.title}.`);
	}

	const contentWidthOnChange = (selected: OptionType) => {
		setContentWidth(selected);
		console.log(`Choosed content width: ${selected.title}.`);
	}

	const handleResetForm = () => {
		console.log('Form reseted');
	}

	const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('Form submitted');
	}

	return (
		<>
			<ArrowButton isAsideOpen={isAsideOpen} setIsAsideOpen={setIsAsideOpen}/>
			<aside
				className={`${styles.container} ${isAsideOpen ? styles.container_open : ''}`}>
				<form className={styles.form} onReset={handleResetForm} onSubmit={handleSubmitForm}>
					
					<Text as={'h2'} size={31} weight={800} uppercase={true} align={'left'}>
						<h2>Задайте параметры</h2>
					</Text>
					
					<Spacing size={50}/>

					<Select 
						selected={fontFamily}
						options={fontFamilyOptions}
						onChange={fontFamilyOnChange}
						title={'Шрифт'}
					/>

					<Spacing size={50}/>

					<RadioGroup 
						name={'fontSize'}
						options={fontSizeOptions}
						selected={fontSize}
						onChange={fontSizeOnChange}
						title={'Размер шрифта'}
					/>	

					<Spacing size={50}/>

					<Select 
						selected={fontColor}
						options={fontColors}
						onChange={fontColorOnChange}
						title={'Цвет шрифта'}
					/>

					<Spacing size={50}/>
					<Separator />
					<Spacing size={50}/>

					<Select 
						selected={backgroundColor}
						options={backgroundColors}
						onChange={backgroundColorOnChange}
						title={'Цвет фона'}
					/>

					<Spacing size={50}/>

					<Select 
						selected={contentWidth}
						options={contentWidthArr}
						onChange={contentWidthOnChange}
						title={'Ширина контента'}
					/>

					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							type='reset'
						/>
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
