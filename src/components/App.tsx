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

  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  useEffect(() => {
    sceneState.isReady = isReady;
  }, [isReady]);
  return (
    <>
      <Global
        styles={css`

          @font-face {
            font-family: 'replica';
            src: url('/fonts/ReplicaLLSub-Regular.woff') format('woff');
            font-weight: normal;
            font-style: normal;
          }
          @font-face {
            font-family: 'replica';
            src: url('/fonts/ReplicaLLWeb-Bold.woff') format('woff');
            font-weight: bold;
            font-style: normal;
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
          }
          body {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            font-family: replica, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
              'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', YuGothic, "Yu Gothic Medium", "Yu Gothic",sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
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
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'anonymous'} />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <meta property="og:url" content="https://www.electrodeart.com/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={contents.meta.title} />
          <meta property="og:description" content={contents.meta.description} />
          <meta property="og:site_name" content={contents.meta.title} />
          <meta property="og:image" content={contents.meta.ogp} />
          <meta name="google" content="notranslate" />
        </Helmet>


         <Helmet>
           <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-9J3KG01S6V`}
          ></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9J3KG01S6V');
            `}
          </script>
         </Helmet>


      <TCanvas />
      <Header />
      <Loader isReady={isReady} />
      <Cursor />
      <Leva hidden={true} />
    </>
  );
};
