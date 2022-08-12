import React, { VFC } from 'react';
import styled from '@emotion/styled';
import { color, font, media, zIndex } from '../../utils/style';

export const About: VFC = () => {
  return (
    <Container>
      <p>this is about</p>
    </Container>
    
  );
};

const Container = styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  p{
    text-align:center;
  }
`