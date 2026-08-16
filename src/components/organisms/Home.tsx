import React, { useEffect, useRef, useState, VFC } from 'react';
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
  const [activeSlide, setActiveSlide] = useState(0);
  const heroSlides = contents.works
    .filter((work: WorkPost) => work.tag === 0)
    .sort((a: WorkPost, b: WorkPost) => b.id - a.id)
    .slice(0, 4);
  const { isReady } = useSnapshot(sceneState);
  const showHero = () => {
    let titles = [heroTitle.current];
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
  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [heroSlides.length]);
  return (
    <motion.div
      key={'home'}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } }}
      exit={{ opacity: 0, y: 50, transition: { duration: 0.5 } }}
    >
      <Hero>
        <Slideshow aria-hidden="true">
          {heroSlides.map((work: WorkPost, index: number) => (
            <SlideImage
              key={work.id}
              src={work.thumb}
              alt=""
              active={index === activeSlide}
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          ))}
          <SlideOverlay />
        </Slideshow>
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
            <span>Neon Arts. </span>
            <span>Taisho Ichikawa</span>
          </p>
        </MainTitle>
      </Hero>
      <Container>
        {contents.works
          .filter((work: WorkPost) => work.tag === 0)
          .sort((a: WorkPost, b: WorkPost) => b.id - a.id)
          .slice(0, 4)
          .map((work: WorkPost, index) => (
            <Item post={work} key={index} indexNumber={index} fullWidth />
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
  overflow: hidden;
  background: ${color.background.canvasDark};
`;

const Slideshow = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
`;

const SlideImage = styled.img<{ active: boolean }>`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: ${({ active }) => (active ? 1 : 0)};
  transform: scale(${({ active }) => (active ? 1.04 : 1)});
  transition: opacity 1.2s ease, transform 6s ease;
`;

const SlideOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.22);
`;

const Container = styled.div`
  position: relative;
  margin-top: 80px;
  /* background: ${color.background.dark}; */
  color: ${color.content.HighEmphasis};
  z-index: ${zIndex.elevation.ev4};

  ${media.lg`
    margin-top: 120px;
  `}
`;

const MainTitle = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  width: 90%;
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
    text-shadow: 0 0 8px rgb(0, 0, 0, 0.1);
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
