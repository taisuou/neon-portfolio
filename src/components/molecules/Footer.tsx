import React, { VFC } from 'react';
import styled from '@emotion/styled';
import { color, zIndex, media } from '../../utils/style';
import { Link } from 'wouter';

export const Footer: VFC = () => {
  return (
    <Container>
      <MenuContainer>
        <Menu>
          <Link href="/works">WORKS</Link>
        </Menu>
        <Menu>
          <Link href="/about">ABOUT</Link>
        </Menu>
        <Menu>
          <Link href="/contact">CONTACT</Link>
        </Menu>
        <Menu>hellow@electrodeart.com</Menu>
        <Menu>
          <img src="images/header_sns_instagram.svg" alt="" />
          <img src="images/header_sns_medium.svg" alt="" />
          <img src="images/header_sns_twitter.svg" alt="" />
        </Menu>
        <CopyRight>©️ 2022 electrode </CopyRight>
      </MenuContainer>
    </Container>
  );
};

const Logo = styled.a``;

const Container = styled.div`
  top: 0;
  display: flex;
  align-items: center;
  padding: 0 32px;
  z-index: ${zIndex.elevation.ev4};
  background: #1d1d1d;
  border-top: 2px solid #505050;
`;
const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Menu = styled.p`
  display: flex;
  font-size: 24px;
  text-decoration: underline;
  margin-bottom: 16px;
  img {
    margin-right: 16px;
    align-items: center;
  }
  color: ${color.content.HighEmphasis};
`;

const CopyRight = styled.p`
  width: 100%;
  font-size: 12px;
  text-align: center;
  padding: 32px 0;
  color: ${color.content.HighEmphasis};
`;
