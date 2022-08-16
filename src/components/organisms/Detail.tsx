import React, { FC, VFC } from 'react';
import styled from '@emotion/styled';
import { color, font, media, zIndex } from '../../utils/style';
import { WorkPost } from '../../../@types/schema';
import { Helmet } from 'react-helmet';

type DetailProps = {
  post: WorkPost;
};

export const Detail: FC<DetailProps> = ({ post }) => {
  return (
    <Container>
      <Helmet>
            <title>{post.titleEn}</title>
            <meta name="description" content={post.descriptionEn} />
      </Helmet>
      <p>this is Detail</p>
      <br />
      <Title>{post.titleEn}</Title>
      <p>{post.descriptionEn}</p>
      <PictureWrap>
        {post.images.map((image, index) => (
          <Picture src={image} key={index} />
        ))}
      </PictureWrap>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  padding: 64px 0 0 0;
  display: flex;
  flex-direction: column;
  p {
    color: ${color.content.HighEmphasis};
    ${font.Inter.article2}
  }
`;
const Title = styled.h1`
  ${font.replica.h1}
`;
const PictureWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Picture = styled.img`
  width: 100%;
`;
