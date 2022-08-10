import React, { VFC } from 'react';
import { css } from '@emotion/css';
import { TCanvas } from './three/TCanvas';
// import { Neon } from './three/Neon';
import {Body} from './molecules/Body';
import {Loader} from './molecules/Loader';
import {Header} from './molecules/Header'
import {Footer} from './molecules/Footer'


export const App: VFC = () => {
	return (
		<div className={styles.container}>
			<Loader/>
			<Header/>
			<Body/>
			<Footer/>
			{/* <Neon/> */}
			<TCanvas />
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
