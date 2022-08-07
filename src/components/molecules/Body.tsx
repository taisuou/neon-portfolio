import React, { VFC } from 'react';
import styled from '@emotion/styled';
import {color, zIndex,} from '../../utils/style'

export const Body: VFC = () => {
	return (
		<Container>
           <MainTitle>Glass and Virtual Neon Arts</MainTitle>
		   <Item>
			<Picture><img src="images/posts/sample.jpg" alt="" /></Picture>
			<Info>
				<TitleEN>Kawakyu Art Exibition 2022 ”In a Dream”</TitleEN>
				<TitleJP>川久アート</TitleJP>
				<Tag>Art</Tag>
			</Info>
		   </Item>
		   <Item>
			<Picture><img src="images/posts/sample.jpg" alt="" /></Picture>
			<Info>
				<TitleEN>Kawakyu Art Exibition 2022 ”In a Dream”</TitleEN>
				<TitleJP>川久アート</TitleJP>
				<Tag>Art</Tag>
			</Info>
		   </Item>
		   <ButtonMore><a href="">view all works</a></ButtonMore>
		</Container>
	)
}


const Container = styled.div`
background:#1d1d1d;
color:#fff;
`
const Item = styled.div`
padding-bottom:64px;
`
const Picture = styled.div`
& img{
	width:100%;	
}
`
const Info = styled.div`
	padding:0 36px;
`
const TitleEN = styled.p`
	font-size:32px;
	padding-bottom:24px;
	margin-bottom:16px;
	border-bottom:1px solid #fff;
`
const TitleJP = styled.p`
	font-size:12px;
	margin-bottom:24px;
`
const Tag = styled.span`
	display:inline-block;
	padding:2px 4px;
	border:1px solid #fff;
	border-radius:4px;
`

const MainTitle = styled.p`
text-align:center;
font-size:80px;
padding:0 36px;
@font-face {
	font-family: 'replica';
	src: url('../fonts/ReplicaLLWeb-Bold.woff') format('woff');
  }
font-family: 'replica', sans-serif;
`

const ButtonMore = styled.div`
text-align:center;
padding:36px;
font-size:24px;
& a{
	display:block;
	padding:10px;
	color:#fff;
	text-decoration:none;
	border:1px solid #fff;
}
`

