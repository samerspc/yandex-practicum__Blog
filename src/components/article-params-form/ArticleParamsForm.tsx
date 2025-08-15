import { useState } from 'react';


import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = () => {
	const [ isAsideOpen, setIsAsideOpen ] = useState<boolean>(false);

	return (
		<>
			<ArrowButton isAsideOpen={isAsideOpen} setIsAsideOpen={setIsAsideOpen}/>
			<aside
				className={`${styles.container} ${isAsideOpen ? styles.container_open : ''}`}>
				<form className={styles.form}>
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
