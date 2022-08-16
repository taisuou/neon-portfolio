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
      <Title>{post.titleEn}</Title>
      <PictureWrap>
        {post.images.map((image, index) => (
          <Picture src={image} key={index} />
        ))}
      </PictureWrap>
      <p>{post.descriptionEn}</p>
      <p>{post.descriptionJp}</p>
    </Container>
  );
};

const Container = styled.div`
background: ${color.background.dark};
padding:32px;
p{
  margin-bottom:24px;
}
img{
  margin-bottom:24px;
}
`;

const Title = styled.h1`
  ${font.replica.h2}
  margin:24px 0;
`;
const PictureWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom:24px;
`;


const Picture = styled.img`
  width: 100%;
`;
