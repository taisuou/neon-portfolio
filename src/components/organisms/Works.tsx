import React, { VFC } from 'react';
import styled from '@emotion/styled';
import { color, font, media, zIndex } from '../../utils/style';

export const Works: VFC = () => {
  return (
    <Container>
      <p>this is works</p>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: ${color.content.HighEmphasis};
    ${font.replica.h1}
  }
`;