import React, { useEffect, useState, VFC } from 'react';
import styled from '@emotion/styled';
import { color, font } from '../../utils/style';
import { Item } from '../molecules/Item';
import { contents } from '../../utils/store';
import { WorkPost } from '../../../@types/schema';
import { sceneState } from '../../utils/sceneState';
import { motion } from 'framer-motion';
import { ScrollRestoration } from 'react-router-dom';

export const Works: VFC = () => {
  const [currentCategory, setCurrentCategory] = useState(0);
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    sceneState.isWorksFiltered = isFiltered;
    sceneState.currentCategory = currentCategory;
  }, [isFiltered, currentCategory]);

  return (
    <Container
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } }}
      exit={{ opacity: 0, y: 50, transition: { duration: 0.5 } }}
      key={'works'}
    >
      <PageTitle>
        <h1>WORKS</h1>
      </PageTitle>
      <UiCategory>
        <ul>
          <li>
            <UiCategoryBtn
              isActive={!isFiltered}
              onClick={() => {
                setIsFiltered(false);
                setCurrentCategory(0);
              }}
              className={'cursor-scale small'}
            >
              ALL
            </UiCategoryBtn>
          </li>
          <li>
            <UiCategoryBtn
              isActive={isFiltered && currentCategory === 0}
              onClick={() => {
                setIsFiltered(true);
                setCurrentCategory(0);
              }}
              className={'cursor-scale small'}
            >
              Art
            </UiCategoryBtn>
          </li>
          <li>
            <UiCategoryBtn
              isActive={isFiltered && currentCategory === 1}
              onClick={() => {
                setIsFiltered(true);
                setCurrentCategory(1);
              }}
              className={'cursor-scale small'}
            >
              Client
            </UiCategoryBtn>
          </li>
        </ul>
      </UiCategory>
      
      {contents.works
        .filter((work: WorkPost, childIndex) =>
          isFiltered ? work.tag === currentCategory : work.tag >= 0,
        )
        .sort((a: WorkPost, b: WorkPost) => b.id - a.id)
        .map((work: WorkPost, childIndex) => (
          <Item post={work} key={childIndex} indexNumber={childIndex} />
        ))}
    </Container>
  );
};

const Container = styled(motion.div)`
  background: ${color.background.dark};
  overflow: hidden;
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
    ${font.replica.button};
    border: 1px solid #fff;
    border-radius: 4px;
  }
`;
const UiCategoryBtn = styled.p<{ isActive: boolean }>`
  cursor: pointer;
  display: inline-block;
  color: ${(props) => (props.isActive ? color.background.dark : color.content.HighEmphasis)};
  background-color: ${(props) => (props.isActive ? color.content.HighEmphasis : 'transparent')};
  text-decoration: none;
  padding: 0 16px;
  transition: 0.3s ease-in-out;
  &:hover {
    color: ${color.background.dark};
    background: ${color.content.HighEmphasis};
    transition: 0.3s ease-in-out;
  }
`;
