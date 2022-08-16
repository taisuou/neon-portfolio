import React, { VFC } from 'react';
import styled from '@emotion/styled';
import { color, font } from '../../utils/style';
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
  height: 50vh;
  padding: 0 32px;
  background-image: url('../images/bg_about.png');
  background-size: cover;
  background-position: center;
  h1 {
    width: 100%;
    font-size: 48px;

    @font-face {
      font-family: 'replica';
      src: url('../fonts/ReplicaLLWeb-Bold.woff') format('woff');
    }
    font-family: 'replica', sans-serif;
  }
`;

const SectionContainer = styled.div`
  padding: 0 32px;
`;

const SectionTitle = styled.div`
  h2 {
    font-size: 32px;
    @font-face {
      font-family: 'replica';
      src: url('../fonts/ReplicaLLWeb-Bold.woff') format('woff');
    }
    font-family: 'replica', sans-serif;
  }
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
    @font-face {
      font-family: 'replica';
      src: url('../fonts/ReplicaLLWeb-Bold.woff') format('woff');
    }
    font-family: 'replica', sans-serif;
  }
  ul li {
    margin: 0 16px;
    font-size: 24px;
    border: 1px solid #fff;
    border-radius: 4px;
  }
  ul li a {
    display: inlne-block;
    color: #fff;
    text-decoration: none;
    padding: 0 16px;
    transition: 0.3s ease-in-out;
  }

  ul li a:hover {
    color: #1d1d1d;
    background: #fff;
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
