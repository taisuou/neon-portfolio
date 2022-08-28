export const animConfig = {
  DELAY_AFTER_READY: 2,
};
export const menus = ['about', 'works', 'contact'];

export const lightState = {
  helper: false,
};

export const boxState = {
  color: '#fff',
  metalness: 0,
  roughness: 0,
};

export const glassState = {
  thickness: 5,
  roughness: 0,
  clearcoat: 1,
  clearcoatRoughness: 0,
  transmission: 1,
  ior: 1.25,
  envMapIntensity: 25,
  color: '#fff',
  attenuationTint: '#ffe79e',
  attenuationDistance: 0,
};

export const contents = {
  meta: {
    title: 'electrode',
    description: `electrode's portfolio`,
    ogp: `/OGP.jpg`,
    favicon: '/favicon.png',
  },
  works: [
    {
      titleEn: 'Kawakyu Art Exibition 2022 "In a Dream"',
      titleJp: 'Kawakyu Art Exibition 2022 「夢中」',
      // ART:0, Client:1
      tag: 0,
      thumb: '/images/posts/2022_kawakyu/2022_kawakyu_01.jpg',
      year: '2022',
      pjinfo:'exhibition',
      descriptionEn:
        'Works exhibited in "Kawakyu Art Exibition 2022: A Dream That Exists".Residence program at Hotel Kawakyu, Wakayama. Jury recommended artist.',
      descriptionJp:
        '「Kawakyu Art Exibition 2022 実在する夢」 の出展作品。和歌山県ホテル川久で行われたレジデンスプログラム。審査員推薦アーティスト。',
      images: [
        '/images/posts/2022_kawakyu/2022_kawakyu_01.jpg',
        '/images/posts/2022_kawakyu/2022_kawakyu_00.jpg',
        '/images/posts/2022_kawakyu/2022_kawakyu_02.jpg',
      ],
    },
    {
      titleEn: 'Distortion @SICF23',
      titleJp: '',
      // ART:0, Client:1
      tag: 0,
      thumb: '/images/posts/2022_distortion/2022_distortion_04.jpg',
      year: '2022',
      pjinfo:'exhibition',
      descriptionEn:
        'Distortion, twist, and strain. This is an experimental work that reveals the aesthetic and emotional qualities that reside in phenomena that would normally be overlooked.',
      descriptionJp:
        'ゆがみ、ねじれ、ひずみ。普段看過されてしまうような事象に宿る、審美性、情緒性を表出させる実験作品。',
      images: [
        '/images/posts/2022_distortion/2022_distortion_01.jpg',
        '/images/posts/2022_distortion/2022_distortion_02.jpg',
        '/images/posts/2022_distortion/2022_distortion_03.jpg',
        '/images/posts/2022_distortion/2022_distortion_00.jpg',
      ],
    },
    {
      titleEn: '"Life Line"/ LUMINE meets ART AWARD2020-2021',
      titleJp: '「Life Line」/ ルミネミーツアートアワード2020-2021',
      // ART:0, Client:1
      tag: 0,
      thumb: '/images/posts/2021_lifeline/2021_lifeline_00.jpg',
      year: '2021',
      pjinfo:'exhibition',
      descriptionEn:
        'LUMINE Meets Art Aword 2020-2021 Entries. The work won the Audience Award. / A picture of an everyday scene is drawn with a special line by a neon sign. I reaffirmed the appreciation of ordinary life, forced to change by the coronavirus.',
      descriptionJp:
        'LUMINE Meets Art Aword 2020-2021 応募作品。オーディエンス賞受賞作品。/日常のシーンを切り取った絵をネオンサインによって、特別な線で描く。コロナウイルスで変化を強いられた、普段の生活のありがたみを再認識する。',
      images: [
        '/images/posts/2021_lifeline/2021_lifeline_00.jpg',
        '/images/posts/2021_lifeline/2021_lifeline_01.jpg',
        '/images/posts/2021_lifeline/2021_lifeline_02.jpg',
      ],
    },
    {
      titleEn: 'Toy Neon',
      titleJp: '',
      // ART:0, Client:1
      tag: 0,
      thumb: '/images/posts/2022_toyneon/2022_toyneon_00.jpg',
      year: '2022',
      pjinfo:'private work',
      descriptionEn:
        'Toy neon / graphic works',
      descriptionJp:
        '',
      images: [
        '/images/posts/2022_toyneon/2022_toyneon_00.jpg',
        '/images/posts/2022_toyneon/2022_toyneon_01.jpg',
        '/images/posts/2022_toyneon/2022_toyneon_02.jpg',
        '/images/posts/2022_toyneon/2022_toyneon_03.jpg',
      ],
    },
    {
      titleEn: '"Chim↑Pom from Smappa! Group" logo neon sign',
      titleJp: '"Chim↑Pom from Smappa! Group" ロゴネオンサイン',
      // ART:0, Client:1
      tag: 1,
      thumb: '/images/posts/2022_chimpom/2022_chimpom_00.jpg',
      year: '2022',
      pjinfo:'order work',
      descriptionEn:
        'Chim↑Pom from Smappa! Group logo neon sign / @ ANOMALY Gallery / April 27, 2022 (Wed) - June 4, 2022 (Sat)',
      descriptionJp:
        'Chim↑Pom from Smappa! Group ロゴネオンサイン / 個展「Chim↑Pom from Smappa!Group」 / ＠ANOMALY Gallery / 2022年4月27日 (水) - 2022年6月4日 (土)',
      images: [
        '/images/posts/2022_chimpom/2022_chimpom_00.jpg',
        '/images/posts/2022_chimpom/2022_chimpom_01.jpg',
        '/images/posts/2022_chimpom/2022_chimpom_02.jpg',
      ],
    },
    {
      titleEn: '3DCG Neon typography and graphics',
      titleJp: '3DCGネオンタイポグラフィ&グラフィックス',
      // ART:0, Client:1
      tag: 0,
      thumb: '/images/posts/2021_3dtypography/2021_3dtypography_00.jpg',
      year: '2021',
      pjinfo:'private work',
      descriptionEn:
        '3DCG Neon typography and graphics',
      descriptionJp:
        '3DCGネオンタイポグラフィ&グラフィック',
      images: [
        '/images/posts/2021_3dtypography/2021_3dtypography_00.jpg',
        '/images/posts/2021_3dtypography/2021_3dtypography_01.jpg',
        '/images/posts/2021_3dtypography/2021_3dtypography_02.jpg',
      ],
    },
    {
      titleEn: 'Ghost Neon Sign',
      titleJp: '',
      // ART:0, Client:1
      tag: 1,
      thumb: '/images/posts/2021_ghost/2021_ghost_00.jpg',
      year: '2021',
      pjinfo:'order work',
      descriptionEn:
        'Neon sign of shared atelier "Ghost" / Yotsugi, Katsushika-ku, Tokyo',
      descriptionJp:
        'シェアアトリエ「Ghost」のネオンサイン/ 東京都葛飾区四つ木',
      images: [
        '/images/posts/2021_ghost/2021_ghost_00.jpg',
        '/images/posts/2021_ghost/2021_ghost_01.jpg',
      ],
    },
    {
      titleEn: 'Argon Dance',
      titleJp: '',
      // ART:0, Client:1
      tag: 0,
      thumb: '/images/posts/2021_argondance/2021_argondance_00.jpg',
      year: '2021',
      pjinfo:'private work',
      descriptionEn:
        'No Description',
      descriptionJp:
        '',
      images: [
        '/images/posts/2021_argondance/2021_argondance_00.jpg',
        '/images/posts/2021_argondance/2021_argondance_01.jpg',
      ],
    },
    {
      titleEn: 'Distortion',
      titleJp: '',
      // ART:0, Client:1
      tag: 0,
      thumb: '/images/posts/2020_distortion/2020_distortion_00.jpg',
      year: '2022',
      pjinfo:'private work',
      descriptionEn:
        'Neon tube viewed through a filter that detects distortion of the glass.Experimenting with variations of the "drawing with light" technique.',
      descriptionJp:
        'ガラスの歪みを検知するフィルターを通じて見たネオン管。「光で描画する」という手法のバリエーションを実験する',
      images: [
        '/images/posts/2020_distortion/2020_distortion_00.jpg',
        '/images/posts/2020_distortion/2020_distortion_01.jpg',
        '/images/posts/2020_distortion/2020_distortion_02.jpg',
        '/images/posts/2020_distortion/2020_distortion_03.jpg',
        '/images/posts/2020_distortion/2020_distortion_04.jpg',
      ],
    },
    {
      titleEn: 'NONAME neon sign',
      titleJp: 'NONAME ネオンサイン',
      // ART:0, Client:1
      tag: 1,
      thumb: '/images/posts/2020_noname/2020_noname_00.jpg',
      year: '2020',
      pjinfo:'order',
      descriptionEn:
        'Neon sign of cafe & bar "NONAME" / Utsunomiya, Tochigi / Logo Designing',
      descriptionJp:
        'カフェ&バー「NONAME」のネオンサイン / 栃木県宇都宮市 / ロゴデザイン設計',
      images: [
        '/images/posts/2020_noname/2020_noname_00.jpg',
        '/images/posts/2020_noname/2020_noname_01.jpg',
        '/images/posts/2020_noname/2020_noname_02.jpg',
      ],
    },
    {
      titleEn: 'Vase neon sign',
      titleJp: 'Vase ネオンサイン',
      // ART:0, Client:1
      tag: 1,
      thumb: '/images/posts/2019_vase/2019_vase_00.jpg',
      year: '2019',
      pjinfo:'order',
      descriptionEn:
        'Neon sign for select store “Vase“/ Kamimeguro, Meguro-ku, Tokyo',
      descriptionJp:
        'セレクトショップ 「Vase」のネオンサイン / 東京都目黒区上目黒',
      images: [
        '/images/posts/2019_vase/2019_vase_00.jpg',
        '/images/posts/2019_vase/2019_vase_01.jpg',
        '/images/posts/2019_vase/2019_vase_02.jpg',
      ],
    },
    {
      titleEn: 'Neon Flower',
      titleJp: '',
      // ART:0, Client:1
      tag: 0,
      thumb: '/images/posts/2019_neonflower/2019_neonflower_00.jpg',
      year: '2019',
      pjinfo:'exhibition',
      descriptionEn:
        'Neon and dried flower sign base',
      descriptionJp:
        'セレクトショップ 「Vase」のネオンサイン / 東京都目黒区上目黒',
      images: [
        '/images/posts/2019_neonflower/2019_neonflower_00.jpg',
        '/images/posts/2019_neonflower/2019_neonflower_01.jpg',
        '/images/posts/2019_neonflower/2019_neonflower_02.jpg',
        '/images/posts/2019_neonflower/2019_neonflower_03.jpg',
        '/images/posts/2019_neonflower/2019_neonflower_04.jpg',
      ],
    },
    {
      titleEn: 'Gampeki Music Festival neon sign',
      titleJp: '「岩壁音楽祭」ネオンサイン',
      // ART:0, Client:1
      tag: 1,
      thumb: '/images/posts/2019_gampeki/2019_gampeki_00.jpg',
      year: '2019',
      pjinfo:'event',
      descriptionEn:
        'Neon sign for "Rock Wall Music Festival" music event',
      descriptionJp:
        '音楽イベント「岩壁音楽祭」のネオンサイン',
      images: [
        '/images/posts/2019_gampeki/2019_gampeki_00.jpg',
        '/images/posts/2019_gampeki/2019_gampeki_01.jpg',
      ],
    },
    {
      titleEn: 'Campbell’s Banana',
      titleJp: '',
      // ART:0, Client:1
      tag: 0,
      thumb: '/images/posts/2019_campbells/2019_campbells_00.jpg',
      year: '2019',
      pjinfo:'exhibition',
      descriptionEn:
        'Works exhibited at the "Banana Night" art event',
      descriptionJp:
        'アートイベント「バナナナイト」出展作品',
      images: [
        '/images/posts/2019_campbells/2019_campbells_00.jpg',
        '/images/posts/2019_campbells/2019_campbells_01.jpg',
        '/images/posts/2019_campbells/2019_campbells_02.jpg',
      ],
    },
  ],
};
