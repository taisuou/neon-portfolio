import React, { VFC } from 'react';
import { css } from '@emotion/css';
import { TCanvas } from './three/TCanvas';
import {Body} from './molecules/Body';
import {Header} from './molecules/Header'
import {Footer} from './molecules/Footer'


export const App: VFC = () => {
	return (
		<div className={styles.container}>
			<Header/>
			<Body/>
			<Footer/>
			{/* <TCanvas /> */}
		</div>
	)
}

const styles = {
	container: css`
		width: 100vw;
		height: 100vh;
		// overflow: hidden;
	`
}
