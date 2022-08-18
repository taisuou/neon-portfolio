import React, { useEffect, useRef, useState, VFC } from 'react';
import styled from '@emotion/styled';
import { color, zIndex, media, font } from '../../utils/style';
import { Link, useLocation } from 'wouter';
import { useMedia } from '../../utils/useMedia';
import { gsap } from 'gsap';

export const Header: VFC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const isMobile = useMedia().isMobile;
  const [location] = useLocation();
  // overlay (SVG path element)
  // TODO : to be refined
  const overlayPath = useRef(null);
  const overlayPathParent = useRef(null);
  let spMenuList = useRef<HTMLElement[] | null[]>([]);

  const menus = ['about', 'works', 'contact'];
  // edit here: https://yqnn.github.io/svg-path-editor/
  const paths = {
    step1: {
      unfilled: 'M 0 0 V 0 Q 50 0 100 0 V 0 z',
      inBetween: {
        curve: 'M 0 0 V 50 Q 50 100 100 50 V 0 z',
      },
      filled: 'M 0 0 V 100 Q 50 100 100 100 V 0 z',
    },
    step2: {
      filled: 'M 0 100 V 0 Q 50 0 100 0 V 100 z',
      inBetween: {
        curve: 'M 0 100 V 0 Q 50 50 100 0 V 100 z',
      },
      unfilled: 'M 0 100 V 100 Q 50 100 100 100 V 100 z',
    },
  };

  const menuOpen = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setMenuOpen(true);

    if (!overlayPath.current || !overlayPathParent.current) return;
    console.log('open');
    gsap
      .timeline()
      .set(spMenuList.current, { autoAlpha: 0, y: -30 })
      .to(spMenuList.current, 0.2, { autoAlpha: 1, y: 0, stagger: 0.05, ease: 'power1.in' }, 0.8);
    gsap
      .timeline({
        onComplete: () => {
          setIsAnimating(false);
        },
      })
      .set(overlayPath.current, {
        attr: { d: paths.step1.unfilled },
      })
      .set(overlayPathParent.current, {
        visibility: 'visible',
      })
      .to(
        overlayPath.current,
        {
          duration: 0.8,
          ease: 'power4.in',
          attr: { d: paths.step1.inBetween.curve },
        },
        0,
      )
      .to(overlayPath.current, {
        duration: 0.2,
        ease: 'power1',
        attr: { d: paths.step1.filled },
      });
  };
  const menuClose = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setMenuOpen(false);
    if (!overlayPath.current || !overlayPathParent.current) return;
    console.log('close');
    gsap
      .timeline()
      .to(
        spMenuList.current,
        0.2,
        { autoAlpha: 0, y: -30, stagger: 0.05, ease: 'power4.out' },
        0.6,
      );
    gsap
      .timeline({
        onComplete: () => {
          setIsAnimating(false);
        },
      })
      .set(overlayPath.current, {
        attr: { d: paths.step1.filled },
      })
      .set(overlayPathParent.current, {
        visibility: 'visible',
      })
      .to(
        overlayPath.current,
        {
          duration: 0.8,
          ease: 'power4.in',
          attr: { d: paths.step1.inBetween.curve },
        },
        0,
      )
      .to(overlayPath.current, {
        duration: 0.2,
        ease: 'power1',
        attr: { d: paths.step1.unfilled },
      })
      .set(overlayPathParent.current, {
        visibility: 'hidden',
      });
  };
  const transitionAnimation = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    if (!overlayPath.current || !overlayPathParent.current) return;
    gsap
      .timeline({
        onComplete: () => {
          setIsAnimating(false);
        },
      })
      .set(overlayPathParent.current, {
        autoAlpha: 1,
      })
      .set(overlayPath.current, {
        attr: { d: paths.step1.unfilled },
      })
      .to(
        overlayPath.current,
        {
          duration: 0.8,
          ease: 'power4.in',
          attr: { d: paths.step1.inBetween.curve },
        },
        0,
      )
      .to(overlayPath.current, {
        duration: 0.2,
        ease: 'power1',
        attr: { d: paths.step1.filled },
      })
      .set(overlayPath.current, {
        attr: { d: paths.step2.filled },
      })
      .to(overlayPath.current, {
        duration: 0.2,
        ease: 'sine.in',
        attr: { d: paths.step2.inBetween.curve },
      })
      .to(overlayPath.current, {
        duration: 1,
        ease: 'power4',
        attr: { d: paths.step2.unfilled },
      })
      .set(overlayPathParent.current, {
        autoAlpha: 0,
      });
  };

  // useEffect(() => {
  //   transitionAnimation()
  //   console.log('location changed');
  // }, [location]);

  return (
    <Container>
      <SVG
        id="overlay"
        width="100vw"
        height="100vh"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        ref={overlayPathParent}
      >
        <path
          fill={color.background.middleDark}
          id="overlay__path"
          vectorEffect="non-scaling-stroke"
          d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
          ref={overlayPath}
        />
      </SVG>
      <a
        href="/"
        onClick={() => {
          isMenuOpen && menuClose();
        }}
      >
        <Logo>
          <img src="/images/header_logo.svg" alt="electrode" width={105} />
        </Logo>
      </a>

      {!isMobile ? (
        <DesktopMenuContainer>
          {menus.map((menu, index) => (
            <li key={index}>
              <a href={`/${menu}`}>{menu.toUpperCase()}</a>
            </li>
          ))}
        </DesktopMenuContainer>
      ) : (
        <>
          <SlidemenuButton
            onClick={() => {
              isMenuOpen ? menuClose() : menuOpen();
            }}
            isOpen={isMenuOpen}
          >
            <span />
            <span />
            <span />
          </SlidemenuButton>
          <SlideMenuContents>
            {menus.map((menu, index) => (
              <li
                ref={(e) => (spMenuList.current[index] = e)}
                key={index}
                onClick={() => {
                  menuClose();
                }}
              >
                <a href={`/${menu}`}>{menu.toUpperCase()}</a>
              </li>
            ))}
          </SlideMenuContents>
        </>
      )}
    </Container>
  );
};

const Logo = styled.a`
  z-index: ${zIndex.elevation.ev8};
`;
const SlidemenuButton = styled.div<{ isOpen: boolean }>`
  width: 32px;
  height: 32px;
  z-index: ${zIndex.elevation.ev8};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  span {
    display: block;
    height: 1px;
    width: 100%;
    background-color: ${color.content.HighEmphasis};
    transition: all 0.3s ease;
    transform-origin: 1px;
    &:first-of-type {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-of-type(2) {
      opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
      transform: ${({ isOpen }) => (isOpen ? 'translateX(20px)' : 'translateX(0)')};
    }
    &:nth-of-type(3) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
const SlideMenuContents = styled.ul`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  li {
    /* initial state of menu */
    opacity: 0;
    visibility: hidden;
    text-align: center;
  }
  a {
    ${font.replica.h1};
    color: ${color.content.HighEmphasis};
    text-decoration: none;
    padding: 8 32px;
    text-align: center;
  }
`;

const Container = styled.div`
  position: fixed;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  z-index: ${zIndex.elevation.ev4};
  color: ${color.content.HighEmphasis};
  font-size: 14px;
`;

const DesktopMenuContainer = styled.ul`
  display: flex;
  z-index: ${zIndex.elevation.ev8};
  li {
    margin: 0 8px 0 0;
    a {
      color: ${color.content.HighEmphasis};
      text-decoration: none;
    }
  }
`;

const SVG = styled.svg`
  position: absolute;
  visibility: hidden;
  top: 0;
  left: 0;
`;
