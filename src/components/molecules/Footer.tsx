import React, { VFC } from 'react';
import styled from '@emotion/styled';
import { color, zIndex } from '../../utils/style';

import { menus } from '../../utils/store';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

type Props = {
  // location:string
};

export const Footer: VFC<Props> = ({}) => {
  const location = useLocation().pathname;
  return (
    <Container
      key={location}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } }}
      exit={{ opacity: 0, y: 50, transition: { duration: 0.5, delay: 0 } }}
    >
      <MenuContainer>
        {menus.map((menu, index) => (
          <Menu key={index} className={'cursor-scale small'}>
            <Link to={`/${menu}`}>{menu.toUpperCase()}</Link>
          </Menu>
        ))}
        <SnsBox className={'cursor-scale small'}>
          <a href="https://www.instagram.com/electrode_taisho/" target="_blank" rel="noreferrer">
            <img src="/images/header_sns_instagram.svg" alt="" />
          </a>

          {/* <a href="https://medium.com/@electrodeart" target="_blank" rel="noreferrer">
            <img src="/images/header_sns_medium.svg" alt="" />
          </a>
          <a href="https://twitter.com/electrodeart" target="_blank" rel="noreferrer">
            <img src="/images/header_sns_twitter.svg" alt="" />
          </a> */}
        </SnsBox>
      </MenuContainer>
      <CopyRight>©️ 2022 electrode </CopyRight>
    </Container>
  );
};

const Container = styled(motion.div)`
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px;
  z-index: ${zIndex.elevation.ev4};
  background: ${color.background.dark};
  border-top: 2px solid ${color.content.Disable};
  a {
    color: #fff;
    text-decoration: none;
  }
`;
const MenuContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const Menu = styled.p`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  text-decoration: underline;
  margin-bottom: 16px;
  a {
  }
  color: ${color.content.HighEmphasis};
`;

const SnsBox = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    margin: 0 8px;
  }
`;

const CopyRight = styled.p`
  width: 100%;
  font-size: 12px;
  text-align: center;
  padding: 32px 0;
  color: ${color.content.HighEmphasis};
`;
