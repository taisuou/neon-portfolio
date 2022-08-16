import React, { VFC } from 'react';
import styled from '@emotion/styled';
import { color, font, media, zIndex } from '../../utils/style';
import { contents } from '../../utils/store';
import { Item } from '../molecules/Item';
import { WorkPost } from '../../../@types/schema';

export const Home: VFC = () => {
  return (
    <>
      <Hero></Hero>
      <Container>
        <MainTitle>Glass and Virtual Neon Arts</MainTitle>

        {/* TIPS map文 */}
        {contents.works.map((work: WorkPost, index) => (
          <Item post={work} key={index} indexNumber={index} />
        ))}

        <ButtonMore>
          <a href="">view all works</a>
        </ButtonMore>
      </Container>
    </>
  );
};

const Hero = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  /* TIPS : color, fontは極力一箇所に定義をまとめる */
  background: ${color.background.dark};
  //color: ${color.content.HighEmphasis};
`;

const MainTitle = styled.p`
  display: block;
  text-align: center;
  padding: 36px 36px;
  /* TIPS fontもこんな感じで一括定義した方が楽。上書きもできる */
  ${font.replica.h1}
  ${media.lg`
   font-size:2rem;
   line-height:2rem;
   width:70%;
   margin:0 auto;
  `}
`;

const ButtonMore = styled.div`
  text-align: center;
  padding: 0 32px 64px 32px;
  ${font.Inter.button}
  & a {
    display: block;
    padding: 10px;
    color: #fff;
    text-decoration: none;
    border: 1px solid #fff;
  }
  ${media.lg`
    width:80%;
    margin:0 auto;
  `}
`;

const PageTitle = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  height: 50vh;
  padding: 0 32px;
  background-image: url('../images/bg_about.png');
  background-size: cover;
  background-position: center;
  h1 {
    width: 100%;
    font-size: 48px;
    @font-face {
      font-family: 'replica';
      src: url('../fonts/ReplicaLLWeb-Bold.woff') format('woff');
    }
    font-family: 'replica', sans-serif;
  }
`;

const SectionContainer = styled.div`
  padding: 0 32px;
`;

const SectionTitle = styled.div`
  h2 {
    font-size: 32px;
    @font-face {
      font-family: 'replica';
      src: url('../fonts/ReplicaLLWeb-Bold.woff') format('woff');
    }
    font-family: 'replica', sans-serif;
  }
`;

const Text = styled.div`
  display: inline;
  margin-bottom: 48px;
  text-align: justify;
  font-size: 16px;
`;

const UiCategory = styled.div`
  width: 100%;
  text-align: center;
  ul {
    display: inline-flex;
    list-style: none;
    padding: 72px 0;
    @font-face {
      font-family: 'replica';
      src: url('../fonts/ReplicaLLWeb-Bold.woff') format('woff');
    }
    font-family: 'replica', sans-serif;
  }
  ul li {
    margin: 0 16px;
    font-size: 24px;
    border: 1px solid #fff;
    border-radius: 4px;
  }
  ul li a {
    display: inlne-block;
    color: #fff;
    text-decoration: none;
    padding: 0 16px;
    transition: 0.3s ease-in-out;
  }

  ul li a:hover {
    color: #1d1d1d;
    background: #fff;
  }
`;
const ColInfobox = styled.div`
  font-size: 24px;
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    padding: 0;
  }
  li {
    width: 33%;
  }
  a {
    color: #fff;
  }
  span {
    font-size: 16px;
  }
`;
