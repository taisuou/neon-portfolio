import React, { VFC } from 'react';
import styled from '@emotion/styled';
import {color, zIndex, media} from '../../utils/style'

export const Footer: VFC = () => {
	return (
		<Container>
            <MenuContainer>
                <Menu>WORKS</Menu>
                <Menu>ABOUT</Menu>
                <Menu>CONTACT</Menu>
                <Menu>hellow@electrodeart.com</Menu>
                <Menu>
                    <img src="images/header_sns_instagram.svg" alt="" />
                    <img src="images/header_sns_medium.svg" alt="" />
                    <img src="images/header_sns_twitter.svg" alt="" />
                </Menu>
                <CopyRight>©️ 2022 electrode </CopyRight>
            </MenuContainer>
		</Container>
	)
}

const Logo = styled.a`
`
const Slidemenu = styled.button`
display: inline-block;
width: 30px;
height: 30px;
vertical-align: middle;
`

const Container = styled.div`
    max-width:1108px;
    margin:0 auto;
    top:0;
    display:flex;
    align-items: center;
    padding:0 36px;
    z-index:${zIndex.elevation.ev4};
    background:#1d1d1d;
`
const MenuContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
`

const Menu = styled.p`
    color:${color.content.HighEmphasis}
`

const CopyRight = styled.p`
width:100%;
text-align:center;
    color:${color.content.HighEmphasis}
`

