import React, { FC, useEffect, VFC } from 'react';
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
    <SectionContainer>
      <Tag>{post.tag === 0 ? 'ART' : 'Client'}</Tag>
      
      <TitleEn>{post.titleEn}</TitleEn>
      <TitleJp>{post.titleJp}</TitleJp>
      <PictureWrap>
        {post.images.map((image, index) => (
          <Picture src={image} key={index} />
        ))}
      </PictureWrap>
      <Caption>
        <ul>
          <li>Year</li>
          <li><span>{post.year}</span></li>
        </ul>
        <ul>
          <li>Project Info</li>
          <li><span>{post.year}</span></li>
        </ul>
      </Caption>
      <p>{post.descriptionEn}</p>
      <p>{post.descriptionJp}</p>

    <PageCtl>
      <CtlTag>{post.tag === 0 ? 'ART' : 'Client'}</CtlTag>
      <ul>
        <li><a href=""></a><img src="../images/arrow_left.svg" alt="" /></li>
        <li><a href=""></a><img src="../images/arrow_right.svg" alt="" /></li>
      </ul>
    </PageCtl>
    </SectionContainer>
    </Container>
  );
};

const Container = styled.div`
background: ${color.background.dark};
padding:91px 32px 64px 32px;
p{
  margin-bottom:24px;
}
img{
  margin-bottom:24px;
}
font-size:${font.Inter.body2};
`;

const SectionContainer = styled.div`
  ${media.lg`
    max-width:1108px;
    margin:0 auto;
  `}
`;

const TitleEn = styled.h1`
  ${font.replica.h2}
  margin-bottom:8px;
  
`;
const TitleJp = styled.h1`
  ${font.Inter.subtitle1}
  margin-bottom:32px;
`;
const PictureWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

const Picture = styled.img`
  width: 100%;
`;

const Caption = styled.div`
display:flex;
margin-bottom:24px;
  li{
    margin-right:24px;
  }
  span{
    display:inline-block;
    font-weight:bold;
  }
`;

const Tag = styled.span`
  display: inline-block;
  padding: 2px 4px;
  border: 1px solid #fff;
  border-radius: 4px;
  margin-bottom:16px;
`;

const PageCtl = styled.div`
  margin-top:64px;
  display:flex;
  align-items:center;
  justify-content:center;
  ul{
    display:flex;
  }
  li:first-of-type{
    margin-right:8px;
  }
`;

const CtlTag = styled.p`
${font.replica.h2}
margin-right:16px;
`;


