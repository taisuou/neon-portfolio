import React, { VFC } from 'react';
import styled from '@emotion/styled';
import { color, font, media } from '../../utils/style';
import { motion } from 'framer-motion';

export const About: VFC = () => {
  return (
    <Container
      key={'about'}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } }}
      exit={{ opacity: 0, y: 50, transition: { duration: 0.5 } }}
    >
      <PageTitle>
        <h1>ABOUT</h1>
      </PageTitle>

      <SectionContainer>
        <SectionTitle>
          <h2>Profile</h2>
        </SectionTitle>
        <TextBox>
          <Text>
            <TextTitle>Taisho Ichikawa</TextTitle>
            <p>
            With a focus on "light as a medium" and "handcraft techniques," I bend neon glass tubes by my hand and create works that utilize the characteristics of neon signs. I approache the ever-changing viewing experience and values from both analog and digital perspectives, including the use of 3DCG as a method of expression. Awards: Brillia Art Award 2024 Selected, LUMINE meets ART AWARD 2020-2021 Audience Award, recent exhibitions: Solo Exhibition [Diffusion], order work: Chim↑Pom from Smappa! Group logo sign.
            </p>
          </Text>
          <Text>
            <TextTitle>市川大翔</TextTitle>
            <p>
              「メディウムとしての光」「手工芸の技術」を軸に、ネオンサインの特性を活かした作品の制作、バーナーワークを手がける。表現手法として、3DCGを用いるなど、移りゆく鑑賞体験や価値観の変化に、アナログ・デジタル双方からアプローチする。受賞歴：Brillia Art Award 2024 入選、LUMINE
              meets ART AWARD 2020-2021
              オーディエンス賞 / 
              展示：個展「Diffusion」 (DiEGO 表参道)、SICF23、オーダーワーク:Chim↑Pom from Smappa! Group
              ロゴサイン。
            </p>
          </Text>
        </TextBox>
      </SectionContainer>
    </Container>
  );
};

const Container = styled(motion.div)`
  background: ${color.background.dark};
`;

const PageTitle = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  height: 30vh;
  padding: 59px 32px 0;
  background-image: url('../images/bg_about.jpg');
  background-size: cover;
  background-position: center;
  padding-bottom: 48px;
  h1 {
    width: 100%;
    ${font.replica.h1};
  }
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 64px 32px;
  ${media.lg`
    max-width:1108px;
    margin:0 auto;
    flex-direction:row;
  `}
`;

const SectionTitle = styled.div`
  h2 {
    ${font.replica.h2};
  }
  margin-bottom: 24px;
  ${media.lg`
    margin-right:72px;
  `}
`;

const TextBox = styled.div`
  p {
    ${font.replica.body2};
    font-size: 14px;
    line-height: 1.5;
  }
  display: inline;
  text-align: justify;
  ${media.lg`
    margin-top:6px;
  `}
`;

const Text = styled.div`
  margin-bottom: 40px;
  p {
    margin-bottom: 16px;
  }
`;

const TextTitle = styled.div`
  ${font.replica.subtitle1};
  margin-bottom: 16px;
`;
