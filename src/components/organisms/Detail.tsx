import React, { FC, VFC } from 'react';
import styled from '@emotion/styled';
import { color, font, media, zIndex } from '../../utils/style';
import { WorkPost } from '../../../@types/schema';

type DetailProps = {
  post: WorkPost;
};

export const Detail: FC<DetailProps> = ({ post }) => {
  return (
    <Container>
      <p>this is Detail</p>
      <br />
      <p>{post.titleEn}</p>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: ${color.content.HighEmphasis};
    ${font.replica.h1}
  }
`;
