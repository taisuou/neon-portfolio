import React, { VFC } from 'react';
import styled from '@emotion/styled';
import { color, font, media, zIndex } from '../../utils/style';

export const Contact: VFC = () => {
  return (
    <Container>
      <PageTitle>
          <h1>CONTACT</h1>
        </PageTitle>

        <SectionContainer>
          <SectionTitle>
            <h2>Contact</h2>
          </SectionTitle>
          <TextBox>
            <Text>
            <p><a href="mailto:hellow@electrodeart">hellow@electrodeart.com</a></p>
            </Text>
          </TextBox>
        </SectionContainer>

    </Container>
  );
};

const Container = styled.div`
position:relative;
background: ${color.background.dark};
  width:100%;
`;

const PageTitle = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  height: 50vh;
  padding: 0 32px;
  background-image: url('../images/bg_about.png');
  background-size: cover;
  background-position: center;
  padding-bottom:48px;
  h1 {
    width: 100%;
    ${font.replica.h2};
  }
`;

const SectionContainer = styled.div`
width:100%;
  padding: 32px;
`;

const SectionTitle = styled.div`
  h2 {
    ${font.replica.h3};
  }
  margin-bottom:24px;
`;

const TextBox = styled.div`
p{
  ${font.Inter.body2};
  font-size:12px;
  line-height:1.5;
}
  display: inline;
  text-align: justify;
  padding-bottom:24px;
`;

const Text = styled.div`
p{
  margin-bottom:16px;
}
`;