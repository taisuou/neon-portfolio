import React, { FC } from 'react';
import styled from '@emotion/styled';
import { media } from '../../utils/style';
import { WorkPost } from '../../../@types/schema';
import { Link } from 'react-router-dom';
import { font } from '../../utils/style';

type ItemCardProps = {
  post: WorkPost;
  indexNumber: number;
};

export const Item: FC<ItemCardProps> = ({ post, indexNumber }) => {
  return (
    <Container to={`/works/${post.id}`} className={'cursor-scale'} >
      
        <Picture>
          <img src={`${post.thumb}`} width="1920" height="1080" alt={`${post.thumb}`} />
        </Picture>
        <Info>
          <TitleEN>{post.titleEn}</TitleEN>
          <TitleJP>{post.titleJp}</TitleJP>
          {/* TIPS : インラインの条件分岐記法  A?B:C */}
          <Tag>{post.tag === 0 ? 'ART' : 'Client'}</Tag>
        </Info>
      
    </Container>
  );
};

const Container = styled(Link)`
  display: flex;
  margin:0 0 64px 0;
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
`;
const Picture = styled.div`
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
`;
const Info = styled.div`
  padding: 0 24px;
  ${media.lg`
  width:40%;
  padding: 0 2%;
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
