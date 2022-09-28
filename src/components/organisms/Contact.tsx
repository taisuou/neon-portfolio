import React, { VFC } from 'react';
import styled from '@emotion/styled';
import { color, font, media, zIndex } from '../../utils/style';
import { motion } from 'framer-motion';

export const Contact: VFC = () => {
  return (
    <Container
      initial={{ opacity: 0, y:-50 }}
      animate={{ opacity: 1, y:0 }}
      exit={{ opacity: 0, y:-50, transition:{ duration: 2} }}
      
    >
      <PageTitle>
        <h1>CONTACT</h1>
      </PageTitle>

      <SectionContainer>
        <SectionTitle>
          <h2>Contact</h2>
        </SectionTitle>
        <ColInfobox>
            <a href="mailto:taisho@electrodeart" className={'cursor-scale small'}>
              taisho@electrodeart.com
            </a>
        </ColInfobox>
      </SectionContainer>

      <SectionContainer>
        <SectionTitle>
          <h2>SNS</h2>
        </SectionTitle>
        <ColInfobox>
          <ul>
            <li>
              <p>
                <span>instagram</span>
              </p>
              <a
                href="https://www.instagram.com/electrode_taisho/"
                target="_blank"
                className={'cursor-scale small'}
              >
                @electrode_taisho
              </a>
            </li>
            <li>
              <p>
                <span>Medium</span>
              </p>
              <a
                href="https://medium.com/@electrodeart"
                target="_blank"
                className={'cursor-scale small'}
              >
                @electrodeart
              </a>
            </li>
            <li>
              <p>
                <span>twitter</span>
              </p>
              <a
                href="https://twitter.com/electrodeart"
                target="_blank"
                className={'cursor-scale small'}
              >
                @electrodeart
              </a>
            </li>
          </ul>
        </ColInfobox>
      </SectionContainer>
    </Container>
  );
};

const Container = styled(motion.div)`
  position: relative;
  background: ${color.background.dark};
  width: 100%;
  a {
    color: ${color.content.HighEmphasis};
  }
`;

const PageTitle = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  height: 30vh;
  padding: 59px 32px 0;
  background-image: url('../images/bg_contact.jpg');
  background-size: cover;
  background-position: center;
  padding-bottom: 48px;
  h1 {
    width: 100%;
    ${font.replica.h1};
  }
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 64px 24px 0 24px;
  ${media.lg`
    max-width:1108px;
    margin:0 auto;
    flex-direction:row;
  `}
  &:last-child {
    padding-bottom: 32px;
  }
`;

const SectionTitle = styled.div`
  h2 {
    ${font.replica.h2};
  }
  ${media.lg`
  width:20%;
`}
`;

const ColInfobox = styled.div`
  font-size: 24px;
  width: 80%;
  display: flex;
  align-items:center;
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    text-align: left;
  }
  li {
    margin-bottom: 24px;
  }
  a {
    color: #fff;
  }
  span {
    display: inline-block;
    font-size: 14px;
    margin-bottom: 8px;
  }
  ${media.lg`
  ul {
    flex-direction: row;
  }
  li {
    margin-right:48px;
  }
`}
`;
