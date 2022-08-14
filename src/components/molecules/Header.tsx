import React, { useEffect, useRef, useState, VFC } from 'react';
import styled from '@emotion/styled';
import { color, zIndex, media } from '../../utils/style';
import { Link } from 'wouter';
import { useMedia } from '../../utils/useMedia';
import { gsap } from "gsap";

export const Header: VFC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const isMobile = useMedia().isMobile;
  
  // overlay (SVG path element)
// TODO : to be refined
const overlayPath = useRef({
  elem: document.querySelector('#overlay__path')
});



  // paths
// edit here: https://yqnn.github.io/svg-path-editor/
const paths = {
  step1: {
      unfilled: 'M 0 0 V 0 Q 50 0 100 0 V 0 z',
      inBetween: {
          curve1: 'M 0 0 V 50 Q 50 0 100 50 V 0 z',
          curve2: 'M 0 0 V 50 Q 50 100 100 50 V 0 z'
      },
      filled: 'M 0 0 V 100 Q 50 100 100 100 V 0 z',
  },
  step2: {
      filled: 'M 0 100 V 0 Q 50 0 100 0 V 100 z',
      inBetween: {
          curve1: 'M 0 0 V 50 Q 50 0 100 50 V 0 z',
          // curve2: 'M 0 0 V 50 Q 50 100 100 50 V 0 z'
      },
      unfilled: 'M 0 0 V 0 Q 50 0 100 0 V 0 z',
  }
};
useEffect(()=>{
  overlayPath.current.elem = document.querySelector('#overlay__path')
})

const menuOpen = ()  => {
  if(isAnimating) return
  setIsAnimating(true)
  console.log('open');
  gsap.timeline({
          onComplete: () => setIsAnimating(false)
      })
      .set(overlayPath.current.elem, {
          attr: { d: paths.step1.unfilled }
      })
      .to(overlayPath.current.elem, { 
          duration: 0.8,
          ease: 'power4.in',
          attr: { d: paths.step1.inBetween.curve2 }
      }, 0)
      .to(overlayPath.current.elem, { 
          duration: 0.2,
          ease: 'power1',
          attr: { d: paths.step1.filled },
          onComplete: () => setMenuOpen(true)
      })
}
const menuClose = ()  => {
  if(isAnimating) return
  setIsAnimating(true)
  console.log('close');
  gsap.timeline({
          onComplete: () => setIsAnimating(false)
      })
      .set(overlayPath.current.elem, {
          attr: { d: paths.step1.filled }
      })
      .to(overlayPath.current.elem, { 
          duration: 0.8,
          ease: 'power4.in',
          attr: { d: paths.step1.inBetween.curve2 }
      }, 0)
      .to(overlayPath.current.elem, { 
          duration: 0.2,
          ease: 'power1',
          attr: { d: paths.step1.unfilled },
          onComplete: () => setMenuOpen(false)
      })
}

  return (
    <Container>
      <SVG id="overlay" width="100vw" height="100vh" viewBox="0 0 100 100" preserveAspectRatio="none">
				<path fill={color.background.middleDark} id="overlay__path" vectorEffect="non-scaling-stroke" d="M 0 100 V 100 Q 50 100 100 100 V 100 z" />
			</SVG>
      <Link href="/">
        <Logo>  
            <img src="images/header_logo.svg" alt="electrode" width={105} />
        </Logo>
      </Link>

      
      {!isMobile ? (
        <DesktopMenuContainer >
          <li>
            <Link href="about">
              <a>ABOUT</a>
            </Link>
          </li>
          <li>
            <Link href="works">
              <a>WORKS</a>
            </Link>
          </li>
          <li>
            <Link href="contact">
              <a>CONTACT</a>
            </Link>
          </li>
        </DesktopMenuContainer>
      ) : (
        <Slidemenu
          onClick={()=>{
            isMenuOpen?menuClose():menuOpen()
            
          }}
        >
          
        </Slidemenu>
      )}
      
    </Container>
  );
};

const Logo = styled.a`
  z-index: ${zIndex.elevation.ev8};
`;
const Slidemenu = styled.div`
  width:44px;
  height:44px;
  background:${color.content.MiddleEmphasis};
  z-index:${zIndex.elevation.ev8}
`;
const IconLine = styled.span`
  content: '';
  display: block;
  position: absolute;
  z-index: 100;
  top: 0;
  bottom: 0;
  width: 28px;
  height: 1px;
  background: white;
  cursor: pointer;
  &::before {
    content: '';
    display: block;
    position: absolute;
    z-index: 100;
    top: 10px;
    bottom: 0;
    width: 28px;
    height: 1px;
    background: white;
    cursor: pointer;
  }
  &::after {
    content: '';
    display: block;
    position: absolute;
    z-index: 100;
    top: 20px;
    bottom: 0;
    width: 28px;
    height: 1px;
    background: white;
    cursor: pointer;
  }
`;
const Container = styled.div`
  position: fixed;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px 0 32px;
  z-index: ${zIndex.elevation.ev4};
  color: ${color.content.HighEmphasis};
  font-size: 14px;
`;
const MenuContainer = styled.ul`
  
  z-index: ${zIndex.elevation.ev8};
  
  li {
    border-bottom: solid 1px white;
  }
  a {
    display: block;
    color: ${color.content.HighEmphasis};
    font-size: 14px;
    padding: 24px;
    text-decoration: none;
    transition-duration: 0.2s;
    &::hover {
      background: #455b6d;
    }
  }
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
  position:absolute;
  top:0;
  left:0;

`