import React, { VFC } from 'react';
import styled from '@emotion/styled';
import { color, zIndex, media } from '../../utils/style';

export const Header: VFC = () => {
  return (
    <Container>
      <Logo>
        <img src="images/header_logo.svg" alt="electrode" width={105} />
      </Logo>
      <MenuContainer id="menuContents" className="menuContents">
          <li>
            <a href="">WORKS</a>
          </li>
          <li>
            <a href="">ABOUT</a>
          </li>
          <li>
            <a href="">CONTACTT</a>
          </li>
      </MenuContainer>
      <Slidemenu>
        <input id="menuTrigger" className="triggerBox" type="checkbox"></input>
        <label className="iconMenu" htmlFor="menuTrigger">
          <IconLine></IconLine>
        </label>
        <label id="menuBack" className="triggerBox" htmlFor="menuTrigger"></label>
      </Slidemenu>
    </Container>
  );
};

const Logo = styled.a``;
const Slidemenu = styled.div`
  .iconMenu {
    position: relative;
    display: inline-block;
    width: 28px;
    height: 28px;
    vertical-align: middle;
  }
  .triggerBox {
    display: none;
    position: fixed;
    z-index: 98;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0;
    transition: 0.7s ease-in-out;
  }
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
  background: #1d1d1d;
  color: #fff;
  font-size: 14px;
`;
const MenuContainer = styled.ul`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  max-width: 320px;
  height: 100vh;
  padding: 53px 16px 16px;
  background: #1f2c37;
  overflow: auto;
  transition: 0.3s ease-in-out;
  transform: translateX(-105%);
  
  li {
    border-bottom: solid 1px white;
  }
  a {
    display: block;
    color: white;
    font-size: 14px;
    padding: 24px;
    text-decoration: none;
    transition-duration: 0.2s;
    &::hover {
      background: #455b6d;
    }
  }
`;

const Menu = styled.p`
  color: ${color.content.HighEmphasis};
  margin-right: 12px;
`;
