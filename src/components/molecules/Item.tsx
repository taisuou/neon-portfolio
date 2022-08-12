import React, { FC, VFC } from 'react';
import styled from '@emotion/styled';
import { color, zIndex, media } from '../../utils/style';
import { WorkPost } from "../../../@types/schema";
import {Link} from 'wouter'

type ItemCardProps = {
    post: WorkPost;
    indexNumber: number;
  };

export const Item: FC<ItemCardProps> = ({post, indexNumber}, ) => {
  return (
    <Link href={`/works/${post.titleEn}`}>
    <Container isOdd={indexNumber%2===0?true:false} >
            <Picture>
              <img src={`${post.thumb}`} />
            </Picture>
            <Info>
              <TitleEN>{post.titleEn}</TitleEN>
              <TitleJP>{post.titleJp}</TitleJP>
              {/* TIPS : インラインの条件分岐記法  A?B:C */}
              <Tag>{post.tag===0? 'ART': 'Client'}</Tag>
            </Info>
    </Container> 
    </Link>
  );
};

const Container = styled.article<{isOdd:boolean}>`
  display:flex;
  padding-bottom: 64px;
  flex-direction:column;
  // TIPS メディクエリのやり方
  // lg:Desktopの場合 /mdsp:tablet, mobileの場合, / sp: mobileの場合
  ${(props)=>props.isOdd?`flex-direction:row;`:`flex-flow: row-reverse;`}};
  cursor:pointer;
  ${media.lg`
    flex-direction:row;
  `}
`
const Picture = styled.div`
  & img {
    width: 100%;
  }
`;
const Info = styled.div`
  padding: 0 32px;
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
