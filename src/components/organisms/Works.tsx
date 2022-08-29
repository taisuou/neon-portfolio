import React, { VFC } from 'react';
import styled from '@emotion/styled';
import { color, font, media, zIndex } from '../../utils/style';
import { Item } from '../molecules/Item';
import { contents } from '../../utils/store';
import { WorkPost } from '../../../@types/schema';

export const Works: VFC = () => {
  return (
    <Container>
      <PageTitle>
        <h1>WORKS</h1>
      </PageTitle>
      <UiCategory>
        <ul>
          <li>
            <a href="">All</a>
          </li>
          <li>
            <a href="">Art</a>
          </li>
          <li>
            <a href="">Client</a>
          </li>
        </ul>
      </UiCategory>
      {contents.works.map((work: WorkPost, index) => (
        <Item post={work} key={index} indexNumber={index} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  background: ${color.background.dark};
`;

const PageTitle = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  height: 30vh;
  padding: 59px 32px 0;
  background-image: url('../images/bg_works.jpg');
  background-size: cover;
  background-position: center;
  padding-bottom: 48px;
  h1 {
    width: 100%;
    ${font.replica.h1};
  }
`;

const SectionContainer = styled.div`
  padding: 0 32px;
`;

const SectionTitle = styled.div`
  h2 {
    ${font.replica.h2};
  }
  margin-bottom: 24px;
  ${media.lg`
    margin-right:72px;
  `}
`;

const Text = styled.div`
  display: inline;
  margin-bottom: 48px;
  text-align: justify;
  font-size: 16px;
`;

const UiCategory = styled.div`
  width: 100%;
  text-align: center;
  ul {
    display: inline-flex;
    list-style: none;
    padding: 72px 0;
  }
  ul li {
    margin: 0 16px;
    ${font.Inter.button};
    border: 1px solid #fff;
    border-radius: 4px;
  }
  ul li a {
    display: inline-block;
    color: #fff;
    text-decoration: none;
    padding: 0 16px;
  }
  ul a {
    transition: 0.3s ease-in-out;
  }
  ul a:hover {
    color: #1d1d1d;
    background: #fff;
    transition: 0.3s ease-in-out;
  }
`;
const ColInfobox = styled.div`
  font-size: 24px;
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    padding: 0;
  }
  li {
    width: 33%;
  }
  a {
    color: #fff;
  }
  span {
    font-size: 16px;
  }
`;
