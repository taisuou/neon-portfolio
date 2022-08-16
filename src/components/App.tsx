import React, { VFC } from 'react';
import { TCanvas } from './three/TCanvas';
// import { Neon } from './three/Neon';
import { Loader } from './molecules/Loader';
import { Header } from './molecules/Header';
import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';
import { color } from '../utils/style';
import { Leva } from 'leva';
import {Helmet} from "react-helmet";
import { contents } from '../utils/store';

export const App: VFC = () => {
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
          body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
              'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            font-size: 62.5%;
            overscroll-behavior: none;
            color: ${color.content.HighEmphasis};
          }
        `}
      />
      <Helmet
            title={ contents.meta.title }
            meta={[
                { name: 'description', content: contents.meta.description }
            ]}
      >
        <link
          rel="icon"
          type="image/png"
          href={contents.meta.favicon}
          sizes="16x16"
        />
        <meta property="og:url" content="OGPに掲載するページのURL" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={contents.meta.title} />
            <meta property="og:description" content={contents.meta.description} />
            <meta property="og:site_name" content={contents.meta.title} />
            <meta property="og:image" content={contents.meta.ogp} />
      </Helmet>
      <Loader/>
      <Container>
        <Header />
        <TCanvas />
      </Container>
      <Leva hidden={false}/>
    </>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  // overflow: hidden;
`;
