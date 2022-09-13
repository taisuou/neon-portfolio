import React, { useEffect, useState, VFC } from 'react';
import { TCanvas } from './three/TCanvas';
// import { Neon } from './three/Neon';
import { Loader } from './molecules/Loader';
import { Header } from './molecules/Header';
import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';
import { color } from '../utils/style';
import { Leva } from 'leva';
import { Helmet } from 'react-helmet';
import { contents } from '../utils/store';
import { sceneState } from '../utils/sceneState';


import { Cursor } from './atoms/Cursor';
import { useProgress } from '@react-three/drei';

export const App: VFC = () => {
  const [isReady, setIsReady] = useState(false);
  const { active } = useProgress();
  useEffect(() => {
    setTimeout(() => {
      //check if 3d canvas is active
      !active && setIsReady(true);
    }, 3000);
  }, [active]);

  useEffect(() => {
    sceneState.isReady = isReady;
  }, [isReady]);
  return (
    <>
      <Global
        styles={css`
          /* TIPS:ページ全体へのCSSはここで定義 */

          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
          @font-face {
            font-family: 'replica';
            src: url('/fonts/ReplicaLLWeb-Bold.woff') format('woff');
          }
          ${emotionReset}

          *, *::after, *::before {
            box-sizing: border-box;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            font-smoothing: antialiased;
          }
          html {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            font-size: calc(100vw * 16 / 375);
          }
          body {
            width: 100%;
            height: 100%;

            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
              'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            font-size: 62.5%;
            overscroll-behavior: none;
            color: ${color.content.HighEmphasis};
            height: 100%;
          }
          #root {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            background-color: cyan;
          }
        `}
      />
      <Helmet
        title={contents.meta.title}
        meta={[{ name: 'description', content: contents.meta.description }]}
      >
        <link rel="icon" type="image/png" href={contents.meta.favicon} sizes="16x16" />
        <meta property="og:url" content="OGPに掲載するページのURL" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={contents.meta.title} />
        <meta property="og:description" content={contents.meta.description} />
        <meta property="og:site_name" content={contents.meta.title} />
        <meta property="og:image" content={contents.meta.ogp} />
        <meta name="google" content="notranslate" />
      </Helmet>
      <TCanvas />
      <Header />
      <Loader isReady={isReady} />
      <Cursor />
      <Leva hidden={true} />
    </>
  );
};
