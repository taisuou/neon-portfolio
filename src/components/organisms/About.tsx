import React, { VFC } from 'react';
import styled from '@emotion/styled';
import { color, font, media, zIndex } from '../../utils/style';

export const About: VFC = () => {
  return (
    <Container>
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
              Born in 1991, graduated from the School of Social Sciences at Waseda University.
              Graduated from Waseda University, School of Social Sciences, and while working as an
              in-house designer for an IT company, designed neon signs and did burner work. He
              creates art works utilizing the characteristics of neon signs, focusing on "light as a
              medium" and "handcraft techniques. He uses not only glass tubes but also 3DCG as a
              method of expression, placing emphasis on both analog and digital. Awards: LUMINE
              meets ART AWARD 2020-2021 Audience Award, recent exhibitions: SICF23, order work:
              Chim↑Pom from Smappa! Group logo sign.
            </p>
            </Text>
            <Text>
            <TextTitle>市川大翔</TextTitle>
            <p>
              1991年生まれ。早稲田大学社会科学部卒業。IT企業にてインハウスデザイナーとして勤めるかたわら、ネオンサインのデザイン、バーナーワークを行う。「メディウムとしての光」「手工芸の技術」を軸に、ネオンサインの特性を活かしたアート作品を手がける。表現手法として、ガラス管だけでなく、3DCGを用いるなど、アナログ・デジタル双方に重点をおき制作を行なっている。受賞歴：LUMINE
              meets ART AWARD 2020-2021
              オーディエンス賞、近年の展示：SICF23、オーダーワーク:Chim↑Pom from Smappa! Group
              ロゴサイン。
            </p>
          </Text>
        </TextBox>
      </SectionContainer>
    </Container>
  );
};

const Container = styled.div`
  background: ${color.background.dark};
`;

const PageTitle = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  height: 40vh;
  padding: 59px 32px 0;
  background-image: url('../images/bg_about.png');
  background-size: cover;
  background-position: center;
  padding-bottom: 48px;
  h1 {
    width: 100%;
    ${font.replica.h1};
  }
`;

const SectionContainer = styled.div`
  display:flex;
  flex-direction:column;
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
  margin-bottom:24px;
  ${media.lg`
    margin-right:72px;
  `}
`;

const TextBox = styled.div`
  p {
    ${font.Inter.body2};
    font-size: 12px;
    line-height: 1.5;
  }
  display: inline;
  text-align: justify;
  ${media.lg`
    margin-top:6px;
  `}
`;

const Text = styled.div`
margin-bottom:40px;
p{
  margin-bottom:16px;
}
`;

const TextTitle = styled.div`
${font.Inter.subtitle1};
margin-bottom:16px;
`;


