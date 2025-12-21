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
          <TextImage>
            <img src="/images/profile.jpg" alt="taisho ichikawa" width={200} />
          </TextImage>
          <Text>
            <TextTitle>Taisho Ichikawa</TextTitle>
            <p>
              Born in Tokyo in 1991. Graduated from the School of Social Sciences at Waseda
              University. He regards neon tubes, his primary medium, as “specimens of phenomena”
              that embody their characteristic discharge glow, and handles the entire process from
              shaping the glass through traditional craftsmanship to engineering the vacuum and
              electrical technologies involved. In the realm of craftsmanship, he is certified as
              one of Japan’s leading neon tube artisans and is engaged in preserving and passing on
              neon sign techniques. Through forms shaped by glass and the plasma within, he creates
              works that explore the relationship between interior and exterior spaces. At the same
              time, by working with noble gases — the key agents of illumination — he addresses
              broader, overarching themes such as the dynamics of control and non-control over
              energy resources, pursuing diverse approaches that highlight the emotive qualities of
              light.
              <br />
              <br />
              -Awards-
              <br />
              2024 / Hirokawa Tamae Prize, SICF25 EXHIBITION Division
              <br />
              2024 / Selected for the Brillia Art Award 2024
              <br />
              2021 / LUMINE meets ART AWARD 2020-2021 Audience Award
              <br />
              <br />
              -Exhibitions-
              <br />
              2025 / GROUND ATAMI (formerly Tsutaya / Atami, Shizuoka)
              <br />
              2025 / MEET YOUR ART FESTIVAL 2025 (Tennoz, Tokyo)
              <br />
              2025 / ART OSAKA (Osaka City Central Public Hall / Nakanoshima, Osaka)
              <br />
              2025 / Group Exhibition “SICF25 Exhibition Division Award Winners Exhibition” (Spiral
              / Omotesando, Tokyo)
              <br />
              2025 / Two-Person Exhibition “will o’ the wisp” (Nomadic Gallery / Shibuya, Tokyo)
              <br />
              2025 / ONE ART Taipei 2025 (Hotel Metropolitan Premier Taipei / Taipei)
              <br />
              2025 / Group Exhibition “Unraveling Light, Weaving” (Paichu / Roppongi, Tokyo)
              <br />
              2024 / Solo Exhibition “Hand in Hand” (YUVAN Gallery / Shibuya, Tokyo)
              <br />
              2024 / LUMINE ART FAIR (Lumine 0 / Shinjuku, Tokyo)
              <br />
              2024 / NAGOYA ART COLLECTION 2024 (Kanayama Minami Building Museum / Nagoya, Aichi)
              <br />
              2024 / Group Exhibition “HARMONY – Function and Beauty” (JILL D’ ART GALLERY / Nagoya,
              Aichi)
              <br />
              2024 / Brillia Art Award 2024 Finalist Exhibition (Brillia Lounge “THE GALLERY” /
              Yaesu, Tokyo)
              <br />
              2024 / SICF25 (Spiral / Omotesando, Tokyo)
              <br />
              2023 / Solo Exhibition “Diffusion” (Gallery DiEGO / Omotesando, Tokyo)
              <br />
              2022 / SICF23 (Spiral / Omotesando, Tokyo)
              <br />
              2022 / “KAWAKYU ART Exhibition 2022” (Kawakyu Museum / Shirahama, Wakayama)
            </p>
          </Text>
          <Text>
            <TextTitle>市川大翔</TextTitle>
            <p>
              1991年、東京生まれ。早稲田大学社会科学部卒業。主なメディウムであるネオン管を、特有の放電発光を内包する「現象の標本」としてとらえ、外形を形作るガラス工芸から、真空や電気などの科学技術のエンジニアリングまで一貫して手がける。工芸領域では、日本有数のネオン管技工士に認定され、ネオンサイン技術の継承にも取り組む。
              ガラスの形状と内部のプラズマが生み出す造形を通して、内と外の関係性を主題とする作品を制作するほか、発光体の主役である希ガスを介して、エネルギー資源の支配／非支配といった俯瞰的なテーマにも向き合い、光の情緒性を生かした多様なアプローチを探求している。
              <br />
              <br />
              -受賞歴-
              <br />
              2024年 / SICF25 EXHIBITION部門 廣川玉枝賞
              <br />
              2024年 / Brillia Art Award 2024 入選
              <br />
              2022年 / KAWAKYU ART Exhibition 2022 審査員推薦アーティスト
              <br />
              2021年 / LUMINE meets ART AWARD 2020-2021 オーディエンス賞
              <br />
              <br />
              -活動歴-
              <br />
              2025年 / GROUND ATAMI (旧つたや / 静岡・熱海)
              <br />
              2025年 / MEET YOUR ART FESTIVAL 2025 (東京・天王洲)
              <br />
              2025年 / ART OSAKA (大阪市中央公会堂 / 大阪・中之島)
              <br />
              2025年 / グループ展「SICF25 EXHIBITION部門　受賞者展」(SPIRAL / 東京・表参道)
              <br />
              2025年 / 二人展「will o' the wisp」(Nomadic Gallery / 東京・渋谷)
              <br />
              2025年 / ONE ART Taipei 藝術台北 2025 (Hotel Metropolitan Premier Taipei / 台北)
              <br />
              2025年 / グループ展「光をほどいて、編む」(アートかビーフンか白厨 / 東京・六本木)
              <br />
              2024年 / 個展「Hand in hand」(YUVAN Gallery / 東京・渋谷)
              <br />
              2024年 / LUMINE ART FAIR (Lumine 0 / 東京・新宿)
              <br />
              2024年 / NAGOYA ART COLLECTION 2024 (金山南ビル美術館 / 愛知・名古屋)
              <br />
              2024年 / 企画展「HARMONY – 用⇔美」(ジルダールギャラリー / 愛知・名古屋)
              <br />
              2024年 / Brillia Art Award 2024入選展 (Brillia Lounge「THE GALLERY」/ 東京・八重洲)
              <br />
              2024年 / SICF25 (SPIRAL / 東京・表参道)
              <br />
              2023年 / 個展「Diffusion」(ギャラリーDiEGO / 東京・表参道)
              <br />
              2022年 / SICF23 (SPIRAL / 東京・表参道)
              <br />
              2022年 / 『KAWAKYU ART Exhibition 2022』(川久ミュージアム / 和歌山・南紀白浜)
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

const TextImage = styled.div`
  margin-bottom: 16px;
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
