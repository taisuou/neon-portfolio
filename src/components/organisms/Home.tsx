import React, { createRef, useEffect, useRef, VFC } from 'react';
import styled from '@emotion/styled';
import { color, font, media, zIndex } from '../../utils/style';
import { contents } from '../../utils/store';
import { Item } from '../molecules/Item';
import { WorkPost } from '../../../@types/schema';
import { useMedia } from '../../utils/useMedia';
import { useSnapshot } from 'valtio';
import { sceneState } from '../../utils/sceneState';
import { gsap } from 'gsap';
import { animConfig } from '../../utils/store';
import { Link } from 'wouter';

export const Home: VFC = () => {
  const { isMobile, isTablet } = useMedia();
  let heroTitle = useRef([createRef<HTMLSpanElement>(), createRef<HTMLSpanElement>()]);
  const { isReady } = useSnapshot(sceneState);
  const showHero = () => {
    const titles = heroTitle.current.map((card) => card.current);
    gsap
      .timeline()
      .set(titles, {
        y: 75,
      })
      .to(titles, {
        y: 0,
        duratiuon: 1,
        delay: animConfig.DELAY_AFTER_READY,
        ease: 'power3.out',
        stagger: 0.1,
      });
  };
  useEffect(() => {
    //triggers only when page load
    const titles = heroTitle.current.map((card) => card.current);
    gsap.timeline().set(titles, {
      y: 75,
    });
  }, []);
  useEffect(() => {
    isReady && showHero();
  }, [isReady]);
  return (
    <>
      <Hero>
        <MainTitle>
          <p>
            <span ref={heroTitle.current[0]}>Glass and Virtual</span>
          </p>
          <p>
            <span ref={heroTitle.current[1]}>Neon Arts</span>
          </p>
        </MainTitle>
        <ScrollArrow>
          <p>Scroll</p>
          <img src="images/arrow_scroll.svg" alt="" />
        </ScrollArrow>
      </Hero>
      <Container>
        {contents.works
          .filter((work: WorkPost, index) => index < 4)
          .map((work: WorkPost, index) => (
            <ImageWrap>
              <Item post={work} key={index} indexNumber={index} />
            </ImageWrap>
          ))}

        <ButtonMore className={'cursor-scale'}>
          <Link href="/works">view all works</Link>
        </ButtonMore>
      </Container>
    </>
  );
};

const Hero = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  min-height: -webkit-fill-available;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Container = styled.div`
  /* background: ${color.background.dark}; */
  color: ${color.content.HighEmphasis};
`;

const MainTitle = styled.div`
  display: flex;
  /* padding: 0 32px; */
  /* height: 100vh; */
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background: rgba(0, 0, 0, 0.25); */
  ${font.replica.h2}
  ${media.lg`
   width:70%;
   margin:0 auto;
   ${font.replica.h1}
  `}
  p {
    overflow: hidden;
  }
  span {
    display: inline-block;
  }
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

  & a {
    transition: 0.3s ease-in-out;
  }
  & a:hover {
    background: #fff;
    color: #1d1d1d;
    transition: 0.3s ease-in-out;
  }
`;
const ImageWrap = styled.div`
  height:80vh;
  display: flex;
  align-items:center ;
`
const ScrollArrow = styled.div`
  position: absolute;
  text-align: center;
  bottom: 32px;
  right: 32px;
  p {
    margin-bottom: 8px;
  }
`;
