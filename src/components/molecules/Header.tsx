import React, { VFC } from 'react';
import styled from '@emotion/styled';

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
    position:fixed;
    top:0;
    width:100vw;
    height:56px;
`
const Menu = styled.p`
    
`