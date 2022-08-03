import React, { VFC } from 'react';
import { css } from '@emotion/css';
import { TCanvas } from './three/TCanvas';
import {Header} from './molecules/Header'

export const App: VFC = () => {
	return (
		<div className={styles.container}>
			<Header/>
			<TCanvas />
		</div>
	)
}

const styles = {
	container: css`
		width: 100vw;
		height: 100vh;
		overflow: hidden;
	`
}
