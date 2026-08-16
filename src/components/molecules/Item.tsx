import React, { FC } from 'react';
import styled from '@emotion/styled';
import { media } from '../../utils/style';
import { WorkPost } from '../../../@types/schema';
import { Link } from 'react-router-dom';
import { font } from '../../utils/style';

type ItemCardProps = {
  post: WorkPost;
  indexNumber: number;
  fullWidth?: boolean;
  compact?: boolean;
};

export const Item: FC<ItemCardProps> = ({
  post,
  indexNumber,
  fullWidth = false,
  compact = false,
}) => {
  return (
    <Container
      to={`/works/${post.id}`}
      className={'cursor-scale'}
      fullWidth={fullWidth}
      compact={compact}
    >
      <Picture fullWidth={fullWidth} compact={compact}>
        <img src={`${post.thumb}`} width="1920" height="1080" alt={`${post.thumb}`} />
      </Picture>
      <Info fullWidth={fullWidth} compact={compact}>
        <TitleEN>{post.titleEn}</TitleEN>
        {!compact && (
          <>
            <TitleJP>{post.titleJp}</TitleJP>
            <Tag>{post.tag === 0 ? 'ART' : 'Client'}</Tag>
          </>
        )}
      </Info>
    </Container>
  );
};

const Container = styled(Link, {
  shouldForwardProp: (prop) => prop !== 'fullWidth' && prop !== 'compact',
})<{ fullWidth: boolean; compact: boolean }>`
  display: flex;
  margin: 0 0 64px 0;
  flex-direction: column;
  color: #fff;
  text-decoration: none;
  ${media.lg`
    align-items: center;
    margin:0 64px 128px 64px;
    flex-direction:row-reverse;
    
    :nth-of-type(2n){
      flex-direction: row;
    }
  `}

  ${({ fullWidth }) =>
    fullWidth &&
    `
      flex-direction: column;
      width: 100%;
      padding: 0 24px;
      box-sizing: border-box;

      @media (min-width: 1040px) {
        width: 100%;
        margin: 0 0 128px;
        padding: 0 64px;
        align-items: stretch;
        flex-direction: column;

        :nth-of-type(2n) {
          flex-direction: column;
        }
      }
    `}

  ${({ compact }) =>
    compact &&
    `
      display: block;
      width: 100%;
      margin: 0;

      @media (min-width: 1040px) {
        display: block;
        width: 100%;
        margin: 0;
      }
    `}
`;
const Picture = styled.div<{ fullWidth: boolean; compact: boolean }>`
  overflow: hidden;
  padding: 0 24px;

  & img {
    width: 100%;
    height: auto;
    margin-bottom: 24px;
  }
  ${media.lg`
  width:60%;
  padding: 0;
  & img{
    margin-bottom: 0px;
    transition: 0.6s ease-in-out;
  }
  &:hover img{
    transform:scale(1.05,1.05);
  }
  `}

  ${({ fullWidth }) =>
    fullWidth &&
    `
      width: 100% !important;
      padding: 0;

      & img {
        display: block;
        width: 100% !important;
        margin-bottom: 0;
      }

      @media (min-width: 1040px) {
        width: 100% !important;

        & img {
          width: 100% !important;
        }
      }
    `}

  ${({ compact }) =>
    compact &&
    `
      width: 100% !important;
      padding: 0;

      & img {
        display: block;
        width: 100% !important;
        margin: 0;
        aspect-ratio: 1 / 1;
        object-fit: cover;
      }
    `}
`;
const Info = styled.div<{ fullWidth: boolean; compact: boolean }>`
  padding: 0 24px;
  ${media.lg`
  width:40%;
  padding: 0 2%;
    }
  `}

  ${({ fullWidth }) =>
    fullWidth &&
    `
      width: 100%;
      padding: 24px 0 0;

      @media (min-width: 1040px) {
        width: 100%;
        padding: 32px 0 0;
      }
    `}

  ${({ compact }) =>
    compact &&
    `
      width: 100%;
      padding: 20px 0 0;

      & > p:first-of-type {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 18px;
      }

      @media (min-width: 1040px) {
        width: 100%;
        padding: 20px 0 0;

        & > p:first-of-type {
          font-size: 32px;
        }
      }
    `}
`;
const TitleEN = styled.p`
  font-size: 32px;
  padding-bottom: 24px;
  margin-bottom: 16px;
  border-bottom: 1px solid #fff;
`;
const TitleJP = styled.p`
  ${font.Jp.subtitle};
  margin-bottom: 24px;
`;
const Tag = styled.span`
  display: inline-block;
  padding: 2px 4px;
  border: 1px solid #fff;
  border-radius: 4px;
  font-size: 16px;
`;
