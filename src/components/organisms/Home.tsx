import React, { createRef, useEffect, useRef, VFC } from 'react';
import styled from '@emotion/styled';
import { color, font, media } from '../../utils/style';
import { contents } from '../../utils/store';
import { Item } from '../molecules/Item';
import { WorkPost } from '../../../@types/schema';
import { useSnapshot } from 'valtio';
import { sceneState } from '../../utils/sceneState';
import { gsap } from 'gsap';
import { animConfig } from '../../utils/store';
import { Link } from 'wouter';
import { motion } from 'framer-motion';

export const Home: VFC = () => {
  let heroTitle = useRef([createRef<HTMLSpanElement>(), createRef<HTMLSpanElement>()]);
  const { isReady } = useSnapshot(sceneState);
  const showHero = () => {
    const titles = heroTitle.current.map((card) => card.current);
    gsap
      .timeline()
      .set(titles, {
        opacity: 0,
        // y:75,
      })
      .to(titles, {
        opacity: 1,
        // y:0,
        duratiuon: 5,
        delay: animConfig.DELAY_AFTER_READY,
        ease: 'power4.out',
        stagger: 0,
      });
  };
  useEffect(() => {
    //triggers only when page load
    const titles = heroTitle.current.map((card) => card.current);
    gsap.timeline().set(titles, {});
  }, []);
  useEffect(() => {
    isReady && showHero();
  }, [isReady]);
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } }}
      exit={{ opacity: 0, y: 50, transition: { duration: 0.5 } }}
    >
      <Hero>
        <MainTitle>
          <p>
            <span ref={heroTitle.current[0]}>Glass and Virtual</span>
          </p>
          <p>
            <span ref={heroTitle.current[1]}>Neon Arts</span>
          </p>
          {/* <p>
            <span ref={shuffletext}>Glass and Virtual</span>
          </p> */}
        </MainTitle>
        <ScrollArrow className="scrollIcon">
          <p>Scroll</p>
          <ScrollIcon>
            <svg
              width="72"
              height="72"
              viewBox="0 0 72 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.5068 60.164L39.452 56.2188"
                stroke="white"
                strokeWidth="1"
                strokeLinecap="round"
              />
              {/* <path d="M35.5069 60.1641L31.5616 56.2189" stroke="white" strokeWidth="1" strokeLinecap="round"/> */}
              <path
                d="M35.5068 11.835V60.1637"
                stroke="white"
                strokeWidth="1"
                strokeLinecap="round"
              />
              <circle cx="36" cy="36" r="35" stroke="white" strokeWidth="1" />
            </svg>
          </ScrollIcon>
        </ScrollArrow>
      </Hero>
      <Container>
        {contents.works
          .filter((work: WorkPost, index) => index < 4)
          .map((work: WorkPost, index) => (
            <Item post={work} key={index} indexNumber={index} />
          ))}

        <ButtonMore className={'cursor-scale'}>
          <Link href="/works">view all works</Link>
        </ButtonMore>
      </Container>
    </motion.div>
  );
};

const Hero = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  min-height: -webkit-fill-available;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Container = styled.div`
  /* background: ${color.background.dark}; */
  color: ${color.content.HighEmphasis};
  img {
    padding: 0 24px;
  }
`;

const MainTitle = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${font.replica.hero}
  padding:0 24px;
  ${media.lg`
   width:70%;
   margin:0 auto;
   font-size: 5rem;
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
  padding: 0 24px 64px 24px;
  ${font.replica.button}
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

const ScrollArrow = styled.div`
  position: absolute;
  text-align: center;
  bottom: 32px;
  right: 32px;
  p {
    margin-bottom: 8px;
  }
`;

const ScrollIcon = styled.div`
  fill: none;
  stroke-dasharray: 220;
  animation: rotateCircle 3500ms infinite;

  @keyframes rotateCircle {
    0% {
      stroke-dashoffset: 220;
      animation-timing-function: ease-out;
    }
    25% {
      stroke-dashoffset: 0;
      animation-timing-function: ease-in;
    }
    50% {
      stroke-dashoffset: 0;
      animation-timing-function: ease-out;
    }
    100% {
      stroke-dashoffset: -220;
      animation-timing-function: ease-out;
    }
  }
`;
