import React, { FC, VFC } from 'react';
import styled from '@emotion/styled';
import { color, font, media } from '../../utils/style';
import { WorkPost } from '../../../@types/schema';
import { Helmet } from 'react-helmet';
import { Link, ScrollRestoration } from 'react-router-dom';
import { contents } from '../../utils/store';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';

export const Detail: VFC = () => {
  const params = useParams();
  const post = contents.works[Number(params.id)];
  const pageIndex = Number(params.id);
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
          <Picture src={post.images[0]} width="1920" height="1080" />
        </PictureWrap>

        <PictureWrap>
          {post.images
            .filter((image, index) => 0 < index)
            .map((image, index) => (
              <Picture src={image} key={index} width="1920" height="1080" />
            ))}
        </PictureWrap>

        <DescriptionEn>{post.descriptionEn}</DescriptionEn>
        <DescriptionJp>{post.descriptionJp}</DescriptionJp>

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
                to={
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
                to={
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
  ${font.replica.h1};
  margin-bottom: 16px;
  ${media.lg`
  font-size: 3.2rem;
  `}
`;
const TitleJp = styled.h1`
  ${font.Jp.subtitle};
  margin-bottom: 32px;
`;
const PictureWrap = styled.div`
  display: flex;
  flex-direction: column;
  img {
    margin-bottom: 40px;
  }
`;

const DescriptionEn = styled.p`
  margin-top: 6px;
  ${font.replica.body1};
  &::after {
    content: '---';
    display: block;
    margin: 8px 0;
  }
`;
const DescriptionJp = styled.p`
  margin-bottom: 48px;
  font-size: 14px;
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
