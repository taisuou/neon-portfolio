import React, { VFC } from 'react';
import styled from '@emotion/styled';
import { color, font, media, zIndex } from '../../utils/style';

export const Contact: VFC = () => {
  return (
    <Container>
      <PageTitle>
        <h1>CONTACT</h1>
      </PageTitle>

      <SectionContainer>
        <SectionTitle>
          <h2>Contact</h2>
        </SectionTitle>
        <TextBox>
          <TextDec>
            <a href="mailto:taisho@electrodeart">taisho@electrodeart.com</a>
          </TextDec>
        </TextBox>
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
              <a href="https://www.instagram.com/electrode_taisho/" target="_blank">
                @electrode_taisho
              </a>
            </li>
            <li>
              <p>
                <span>Medium</span>
              </p>
              <a href="https://medium.com/@electrodeart" target="_blank">
                @electrodeart
              </a>
            </li>
            <li>
              <p>
                <span>twitter</span>
              </p>
              <a href="https://twitter.com/electrodeart" target="_blank">
                @electrodeart
              </a>
            </li>
          </ul>
        </ColInfobox>
      </SectionContainer>
    </Container>
  );
};

const Container = styled.div`
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
  height: 40vh;
  padding: 59px 32px 0;
  background-image: url('../images/bg_about.png');
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
  padding: 64px 32px 0 32px;
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
    ${font.replica.h3};
  }
  margin-bottom: 24px;
  ${media.lg`
  width:10%;
  margin-right:72px;
`}
`;

const TextBox = styled.div`
  p {
    ${font.Inter.body2};
    font-size: 12px;
    line-height: 1.5;
  }
  display: inline;
  text-align: justify;
  padding-bottom: 24px;
`;

const TextDec = styled.div`
  font-size: 1.5rem;
`;

const ColInfobox = styled.div`
  font-size: 24px;
  text-align: center;
  width: 90%;
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

