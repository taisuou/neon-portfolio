import React, { FC } from 'react';
import styled from '@emotion/styled';
import { color, font, media } from '../../utils/style';
import { WorkPost } from '../../../@types/schema';
import { Helmet } from 'react-helmet';
import { Link } from 'wouter';
import { contents } from '../../utils/store';
import { motion } from 'framer-motion';

type DetailProps = {
  post: WorkPost;
  pageIndex: number;
};

export const Detail: FC<DetailProps> = ({ post, pageIndex }) => {
  return (
    <Container
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } }}
      exit={{ opacity: 0, y: 50, transition: { duration: 0.5 } }}
    >
      <Helmet>
        <title>{post.titleEn}</title>
        <meta name="description" content={post.descriptionEn} />
      </Helmet>
      <SectionContainer>
        <Tag>{post.tag === 0 ? 'ART' : 'Client'}</Tag>

        <TitleEn>{post.titleEn}</TitleEn>
        <TitleJp>{post.titleJp}</TitleJp>
        <PictureWrap>
          <Picture src={post.images[0]} />
        </PictureWrap>
        <DescriptionEn>{post.descriptionEn}</DescriptionEn>
        <DescriptionJp>{post.descriptionJp}</DescriptionJp>

        <PictureWrap>
          {post.images
            .filter((image, index) => 0 < index)
            .map((image, index) => (
              <Picture src={image} key={index} />
            ))}
        </PictureWrap>

        <Caption>
          <ul>
            <li>Year</li>
            <li>
              <span>{post.year}</span>
            </li>
          </ul>
          <ul>
            <li>Project Info</li>
            <li>
              <span>{post.pjinfo}</span>
            </li>
          </ul>
        </Caption>

        <PageCtl>
          <CtlTag>{post.tag === 0 ? 'ART' : 'Client'}</CtlTag>
          <ul>
            <li className={'cursor-scale small'}>
              <Link
                href={
                  pageIndex === 0
                    ? `/works/${contents.works.length - 1}`
                    : `/works/${pageIndex - 1}`
                }
              >
                <img src="../images/arrow_left.svg" alt="" />
              </Link>
            </li>
            <li className={'cursor-scale small'}>
              <Link
                href={
                  pageIndex === contents.works.length - 1 ? `/works/0` : `/works/${pageIndex + 1}`
                }
              >
                <img src="../images/arrow_right.svg" alt="" />
              </Link>
            </li>
          </ul>
        </PageCtl>
      </SectionContainer>
    </Container>
  );
};

const Container = styled(motion.div)`
  background: ${color.background.dark};
  padding: 91px 32px 64px 32px;
  font-size: ${font.replica.body2};
`;

const SectionContainer = styled.div`
  ${media.lg`
    max-width:980px;
    margin:0 auto;
  `}
`;

const TitleEn = styled.h1`
  ${font.replica.h1}
  margin-bottom:8px;
  ${media.lg`
  font-size: 3.2rem;
  `}
`;
const TitleJp = styled.h1`
  ${font.replica.subtitle1}
  margin-bottom:32px;
`;
const PictureWrap = styled.div`
  display: flex;
  flex-direction: column;
  img {
    margin-bottom: 24px;
  }
`;

const DescriptionEn = styled.p`
  margin-top: 6px;
  &::after {
    content: '-';
    display: block;
    margin: 8px 0;
  }
`;
const DescriptionJp = styled.p`
  margin-bottom: 32px;
`;

const Picture = styled.img`
  width: 100%;
  height: auto;
`;

const Caption = styled.div`
  display: flex;
  margin-bottom: 24px;
  li {
    margin-right: 24px;
  }
  span {
    display: inline-block;
    font-weight: bold;
  }
`;

const Tag = styled.span`
  display: inline-block;
  padding: 2px 4px;
  border: 1px solid #fff;
  border-radius: 4px;
  margin-bottom: 16px;
`;

const PageCtl = styled.div`
  margin-top: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  ul {
    display: flex;
  }
  li:first-of-type {
    margin-right: 8px;
  }
  li {
    cursor: pointer;
  }
`;

const CtlTag = styled.p`
  ${font.replica.h2}
  margin-right:16px;
`;
