import React, { FC, VFC } from 'react';
import styled from '@emotion/styled';
import { color, zIndex, media } from '../../utils/style';
import { WorkPost } from '../../../@types/schema';
import { Link } from 'wouter';

type ItemCardProps = {
  post: WorkPost;
  indexNumber: number;
};

export const Item: FC<ItemCardProps> = ({ post, indexNumber }) => {
  return (
    <Link href={`/works/${indexNumber}`}>
      <Container isOdd={indexNumber % 2 === 0 ? true : false}>
        <Picture>
          <img src={`${post.thumb}`} />
        </Picture>
        <Info>
          <TitleEN>{post.titleEn}</TitleEN>
          <TitleJP>{post.titleJp}</TitleJP>
          {/* TIPS : インラインの条件分岐記法  A?B:C */}
          <Tag>{post.tag === 0 ? 'ART' : 'Client'}</Tag>
        </Info>
      </Container>
    </Link>
  );
};



const Container = styled.a<{ isOdd: boolean }>`
  display:flex;
  padding-bottom: 64px;
  flex-direction:column;
  color:#fff;
  text-decoration:none;
  // lg:Desktop /mdsp:tablet, mobile, / sp: mobile
  // ${(props) => (props.isOdd ? `flex-direction:row;` : `flex-flow: row-reverse;`)}};
  // cursor:pointer;
  ${media.lg`
    width:100%;
    align-items: center;
    padding:0 32px 64px 32px;
    //justify-content:center;
    flex-direction:row-reverse;
    :nth-child(2n){
      flex-direction: row;
    }
  `}
`;
const Picture = styled.div`
  & img {
    width: 100%;
    margin-bottom:24px;
  }
  ${media.lg`
  width:60%;
    }
  `}
`;
const Info = styled.div`
padding:0 32px;
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
  font-size: 16px;
  margin-bottom: 24px;
`;
const Tag = styled.span`
  display: inline-block;
  padding: 2px 4px;
  border: 1px solid #fff;
  border-radius: 4px;
  font-size: 16px;
`;
