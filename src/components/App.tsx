import React, { VFC } from 'react';
import { TCanvas } from './three/TCanvas';
// import { Neon } from './three/Neon';
import { Loader } from './molecules/Loader';
import { Header } from './molecules/Header';
import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';

export const App: VFC = () => {
  return (
    <>
      <Global styles={css`
          /* TIPS:ページ全体へのCSSはここで定義 */

          ${emotionReset}

          @font-face {
            font-family: 'replica';
            src: url('/fonts/ReplicaLLWeb-Bold.woff') format('woff');
          }
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

          *, *::after, *::before {
            box-sizing: border-box;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            font-smoothing: antialiased;
          }
          body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
              'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            font-size: 62.5%;
            overscroll-behavior: none;
            
          }
          
      `} />
      <Container>
        <Loader />
        <Header />
        <TCanvas />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
// overflow: hidden;
`
