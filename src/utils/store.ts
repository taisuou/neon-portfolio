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
      titleEn: 'Kawakyu Art Exibition 2022 ”In a Dream”',
      titleJp: 'Kawakyu Art Exibition 2022 「夢中」',
      // ART:0, Client:1
      tag: 0,
      thumb: '/images/posts/2022_kawakyu/2022_kawakyu_00.jpg',
      year: '2022',
      pjinfo: 'Exhibition',
      descriptionEn:
        'Works exhibited in "Kawakyu Art Exibition 2022: A Dream That Exists".Residence program at Hotel Kawakyu, Wakayama. Jury recommended artist.',
      descriptionJp:
        '6「Kawakyu Art Exibition 2022 実在する夢」 の出展作品。和歌山県ホテル川久で行われたレジデンスプログラム。審査員推薦アーティスト。/1より川久ミュージアムでの展示会 KAWAKYU ART Exhibtion 2022「実在する夢」がスタートしました。 ⁡ 本展のテーマに合わせたネオンの作品を出展しています。出展にあたって1週間、ホテル川久への滞在の機会もいただきました。川久ホテルの絢爛なしつらえのなかで、贅沢な時間を過ごさせてもらっています。 ⁡ レジデンスに参加されている他の作家さんや、キュレーターの皆さんとの密な交流もあり、本当に参加できてよかったです。 ⁡ 東京からは飛行機で1時間、小旅行にぴったりの場所ですので是非はねを伸ばしに遊びにきてください。',
      images: [
        '/images/posts/2022_kawakyu/2022_kawakyu_00.jpg',
        '/images/posts/2022_kawakyu/2022_kawakyu_01.jpg',
        '/images/posts/2022_kawakyu/2022_kawakyu_02.jpg',
      ],
    },
    {
      titleEn: 'Argon Dance',
      titleJp: '',
      // ART:0, Client:1
      tag: 0,
      thumb: '/images/posts/2021_argondance/2021_argondance_00.jpg',
      year: '2021',
      pjinfo: 'private work',
      descriptionEn: 'No description',
      descriptionJp: '',
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
      pjinfo: 'private work',
      descriptionEn:
        'Neon tube viewed through a filter that detects distortion of the glass. Graphics are expressed through distortion',
      descriptionJp:
        'ガラスの歪みを検知するフィルターを通じて見たネオン管。歪みでグラフィックを表現する',
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
      pjinfo: 'order',
      descriptionEn: 'Neon sign of cafe & bar "NONAME" / Utsunomiya, Tochigi',
      descriptionJp: 'カフェ&バー「NONAME」のネオンサイン / 栃木県宇都宮市',
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
      pjinfo: 'order',
      descriptionEn: 'Neon sign for select store “Vase“/ Kamimeguro, Meguro-ku, Tokyo',
      descriptionJp: 'セレクトショップ 「Vase」のネオンサイン / 東京都目黒区上目黒',
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
      pjinfo: 'exhibition',
      descriptionEn: 'Neon and dried flower sign base',
      descriptionJp: '音楽イベント「岩壁音楽祭」のネオンサイン',
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
      pjinfo: 'event',
      descriptionEn: 'Neon sign for "Rock Wall Music Festival" music event',
      descriptionJp: '音楽イベント「岩壁音楽祭」のネオンサイン',
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
      pjinfo: 'exhibition',
      descriptionEn: 'Works exhibited at the "Banana Night" art event',
      descriptionJp: 'アートイベント「バナナナイト」出展作品',
      images: [
        '/images/posts/2019_campbells/2019_campbells_00.jpg',
        '/images/posts/2019_campbells/2019_campbells_01.jpg',
        '/images/posts/2019_campbells/2019_campbells_02.jpg',
      ],
    },
  ],
};
