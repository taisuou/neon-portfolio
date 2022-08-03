import React, { VFC } from 'react';
import styled from '@emotion/styled';
import {color, zIndex} from '../../utils/style'

export const Header: VFC = () => {
	return (
		<Container>
            <Menu>WORKS</Menu>
            <Menu>ABOUT</Menu>
            <Menu>CONTACT</Menu>
		</Container>
	)
}

const Container = styled.div`
    display:flex;
    flex-direction:row;
    position:fixed;
    top:0;
    width:100vw;
    height:56px;
    z-index:${zIndex.elevation.ev4};

`
const Menu = styled.p`
    color:${color.content.HighEmphasis}
`