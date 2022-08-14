import React, { useEffect, useRef, useState, VFC } from 'react';
import styled from '@emotion/styled';
import { color, zIndex, media, font } from '../../utils/style';
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
let spMenuList = useRef<HTMLElement[]|null[]>([]);



const menus = ['about','works','contact']
// edit here: https://yqnn.github.io/svg-path-editor/
const paths = {
  step1: {
      unfilled: 'M 0 0 V 0 Q 50 0 100 0 V 0 z',
      inBetween: {
          curve1: 'M 0 0 V 50 Q 50 0 100 50 V 0 z',
          curve2: 'M 0 0 V 50 Q 50 100 100 50 V 0 z'
      },
      filled: 'M 0 0 V 100 Q 50 100 100 100 V 0 z',
  }
};
useEffect(()=>{
  overlayPath.current.elem = document.querySelector('#overlay__path')
})

const menuOpen = ()  => {
  if(isAnimating) return
  setIsAnimating(true)
  setMenuOpen(true)
  console.log('open');
  gsap.timeline().set(spMenuList.current,{autoAlpha: 0, y:-30}).to(spMenuList.current, 0.2, { autoAlpha: 1,y:0, stagger: 0.05, ease: 'power1.in' },0.8);
  gsap.timeline({
          onComplete: () => {
            setIsAnimating(false)
            
          }
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
  setMenuOpen(false)
  console.log('close');
  gsap.timeline().to(spMenuList.current, 0.2, { autoAlpha: 0, y:-30,stagger: 0.05, ease: 'power4.out' },0.6);
  gsap.timeline({
          onComplete: () => {
            setIsAnimating(false)
            
          }
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
          {menus.map((menu, index)=>(
            <li key={index}>
              <Link href={menu}>{menu.toUpperCase()}</Link>
            </li>
          ))}
        </DesktopMenuContainer>
      ) : (
        <>
          <SlidemenuButton
            onClick={()=>{
              isMenuOpen?menuClose():menuOpen()
            }}
            isOpen={isMenuOpen}
          >
            <span/><span/><span/>
          </SlidemenuButton>
            <SlideMenuContents>
              {menus.map((menu, index)=>(
                <li ref={e => (spMenuList.current[index] = e)} key={index}>
                  <Link href={menu}>{menu.toUpperCase()}</Link>
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
const SlidemenuButton = styled.div<{isOpen:boolean}>`
  width:32px;
  height:32px;
  background:${color.content.MiddleEmphasis};
  z-index:${zIndex.elevation.ev8};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  span{
    display:block;
    height:1px;
    width:100%;
    background-color:${color.content.HighEmphasis};
    transition: all 0.3s linear;
    transform-origin: 1px;
    &:first-of-type{
      transform: ${({ isOpen }) => isOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-of-type(2){
      opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
      transform: ${({ isOpen }) => isOpen ? 'translateX(20px)' : 'translateX(0)'};
    }
    &:nth-of-type(3){
      transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;
const SlideMenuContents = styled.ul`
  position:fixed;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  li{
    /* initial state of menu */
    opacity:0;
    text-align:center;
  }
  a{
    ${font.replica.h1};
    color:${color.content.HighEmphasis};
    text-decoration:none ;
    padding:8 32px;
    text-align: center;

  }
`
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