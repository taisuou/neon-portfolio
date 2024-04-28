import React, { createRef, useEffect, useRef, VFC } from 'react';
import styled from '@emotion/styled';
import { color, font, media, zIndex } from '../../utils/style';
import { contents } from '../../utils/store';
import { Item } from '../molecules/Item';
import { WorkPost } from '../../../@types/schema';
import { useSnapshot } from 'valtio';
import { sceneState } from '../../utils/sceneState';
import { gsap } from 'gsap';
import { animConfig } from '../../utils/store';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Home: VFC = () => {
  //let heroTitle = useRef([createRef<HTMLSpanElement>(), createRef<HTMLSpanElement>()]);
  let heroTitle = useRef<HTMLImageElement | null>(null);
  let scrollIconRef = useRef<HTMLDivElement | null>(null);

  const { isReady } = useSnapshot(sceneState);
  const showHero = () => {
    let titles = [heroTitle.current, scrollIconRef.current];
    //let titles = [heroTitle.current.map((card) => card.current), scrollIconRef.current];
    // const titles = heroTitle.current.map((card) => card.current);
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
        stagger: 0.2,
      });
  };
  useEffect(() => {
    //triggers only when page load
    //const titles = heroTitle.current.map((card) => card.current);
    const titles = heroTitle.current;
    gsap.timeline().set(titles, {});
  }, []);
  useEffect(() => {
    isReady && showHero();
  }, [isReady]);
  return (
    <motion.div
      key={'home'}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } }}
      exit={{ opacity: 0, y: 50, transition: { duration: 0.5 } }}
    >
      <Hero>
        {/* <MainTitle>
          <p>
            <span ref={heroTitle.current[0]}>Glass and Virtual</span>
          </p>
          <p>
            <span ref={heroTitle.current[1]}>Neon Arts</span>
          </p>
        </MainTitle> */}
        <MainTitle ref={heroTitle}>
          <p>
            <span>Neon Arts. electrode</span>
          </p>
          
        </MainTitle>
        <ScrollArrow className="scrollIcon" ref={scrollIconRef}>
          {/* <p>Scroll</p> */}
          <ScrollIcon>
            {/* <svg
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
              <path
                d="M35.5068 11.835V60.1637"
                stroke="white"
                strokeWidth="1"
                strokeLinecap="round"
              />
              <circle cx="36" cy="36" r="35" stroke="white" strokeWidth="1" />
            </svg> */}
            <svg
              width="72"
              height="95"
              viewBox="0 0 72 95"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M71.5 59C71.5 78.6061 55.6061 94.5 36 94.5C16.3939 94.5 0.5 78.6061 0.5 59C0.5 39.3939 16.3939 23.5 36 23.5C55.6061 23.5 71.5 39.3939 71.5 59Z"
                className="arrowCircle"
                stroke="white"
                strokeMiterlimit="10"
              />
              <path d="M40.5 75.2398L36 79.7398V36.2598" stroke="white" strokeMiterlimit="10" />

              <g clipPath="url(#clip0_638_514)">
                <path
                  d="M19.9281 2.37973C18.8871 1.65198 17.6816 1.10616 16.4138 1.01297C15.146 0.919787 13.807 1.32804 12.9395 2.25548C12.0721 3.18291 11.7785 4.66504 12.3879 5.77886C13.0685 7.02136 14.5721 7.51392 15.9423 7.87336C17.3124 8.2328 18.8204 8.66767 19.5767 9.86136C20.364 11.1039 19.9993 12.87 18.9272 13.8773C17.8551 14.8846 16.2403 15.1908 14.799 14.8891C13.3577 14.5873 12.0721 13.7531 11 12.7457"
                  stroke="white"
                  strokeMiterlimit="10"
                />
                <path d="M35 5V15" stroke="white" strokeMiterlimit="10" />
                <path
                  d="M57 15C55.3412 15 54 13.9049 54 12.5504V1"
                  stroke="white"
                  strokeMiterlimit="10"
                />
                <path
                  d="M62 15C60.3412 15 59 13.9049 59 12.5504V1"
                  stroke="white"
                  strokeMiterlimit="10"
                />
                <path
                  d="M46.0024 5H45.9976C43.7898 5 42 6.7313 42 8.86697V11.133C42 13.2687 43.7898 15 45.9976 15H46.0024C48.2102 15 50 13.2687 50 11.133V8.86697C50 6.7313 48.2102 5 46.0024 5Z"
                  stroke="white"
                  strokeMiterlimit="10"
                />
                <path
                  d="M31 11.1313C31 13.2607 29.2017 15 27 15C24.7983 15 23 13.2607 23 11.1313V8.86875C23 6.73933 24.7983 5 27 5C29.2017 5 31 6.73933 31 8.86875"
                  stroke="white"
                  strokeMiterlimit="10"
                />
                <path d="M35 11C35 8.23792 37.2379 6 40 6" stroke="white" strokeMiterlimit="10" />
              </g>
            </svg>
          </ScrollIcon>
        </ScrollArrow>
      </Hero>
      <Container>
        
        {contents.works
          .filter((work: WorkPost) => work.tag === 0)
          .sort((a: WorkPost, b: WorkPost) => b.id - a.id)
          .slice(0, 4)
          .map((work: WorkPost, index) => (
            <Item post={work} key={index} indexNumber={index} />
          ))}

        <ButtonMore className={'cursor-scale'}>
          <Link to="/works">view all works</Link>
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
  z-index: ${zIndex.elevation.ev4};
`;

const Container = styled.div`
  position: relative;
  /* background: ${color.background.dark}; */
  color: ${color.content.HighEmphasis};
  z-index: ${zIndex.elevation.ev4};
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
    text-shadow: 0 0 8px rgb(0,0,0,0.1);
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

const ArrowCircle = styled.div``;

const ScrollIcon = styled.div`
  .arrowCircle {
    fill: none;
    stroke-dasharray: 220;
    animation: rotateCircle 4000ms infinite;

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
  }
`;
