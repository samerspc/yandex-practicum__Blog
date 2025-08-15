import { useState, RefObject, forwardRef } from 'react';
import clsx from 'clsx';
import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';

export type OnClick = () => void;

interface IArrowButton {
	isAsideOpen: boolean;
	setIsAsideOpen: (arg: boolean) => void;
}

export const ArrowButton = ({isAsideOpen, setIsAsideOpen}: IArrowButton) => {

	const handleClick: OnClick = () => {
		isAsideOpen ? setIsAsideOpen(false) : setIsAsideOpen(true);
		console.log('Arrow button clicked.')
	}	

	return (
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={`${styles.container} ${isAsideOpen ? styles.container_open : ''}`}
			onClick={handleClick}
		>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={styles.arrow}
			/>
		</div>
	);
};
