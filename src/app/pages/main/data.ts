export interface IWeatherItem {
  img: string;
  address: string;
  phone: string;
  weather: {
    title: string;
    icon: string;
    water: number;
    temperature: number;
  };
  social_info: {
    title: string;
    img: string;
    followers: number;
    following: number;
  };
  type: string;
}

export const data: IWeatherItem[] = [
  {
    img: 'http://placekitten.com/300/300?784',
    address: '897 Greenwood Avenue, Guilford, Louisiana, 1322',
    phone: '8705542866',
    weather: {
      title: 'fugiat culpa minim',
      icon: 'http://placekitten.com/100/100?738',
      water: 19,
      temperature: 21,
    },
    social_info: {
      title: 'ea voluptate eiusmod laborum',
      img: 'http://placekitten.com/300/300?619',
      followers: 152,
      following: 291,
    },
    type: 'tours',
  },
  {
    img: 'http://placekitten.com/300/300?917',
    address: '175 Kenmore Court, Leroy, Idaho, 5444',
    phone: '8695953992',
    weather: {
      title: 'adipisicing quis laboris',
      icon: 'http://placekitten.com/100/100?153',
      water: 12,
      temperature: 16,
    },
    social_info: {
      title: 'cupidatat ad nulla aliquip',
      img: 'http://placekitten.com/300/300?924',
      followers: 288,
      following: 387,
    },
    type: 'weather',
  },
  {
    img: 'http://placekitten.com/300/300?395',
    address: '243 Judge Street, Tivoli, Utah, 1825',
    phone: '9505073530',
    weather: {
      title: 'aliquip reprehenderit pariatur',
      icon: 'http://placekitten.com/100/100?485',
      water: 24,
      temperature: 23,
    },
    social_info: {
      title: 'reprehenderit ea magna irure',
      img: 'http://placekitten.com/300/300?923',
      followers: 704,
      following: 929,
    },
    type: 'hotel',
  },
  {
    img: 'http://placekitten.com/300/300?667',
    address: '871 Underhill Avenue, Orin, Arkansas, 2606',
    phone: '9954653103',
    weather: {
      title: 'aliquip consequat cillum',
      icon: 'http://placekitten.com/100/100?615',
      water: 30,
      temperature: 30,
    },
    social_info: {
      title: 'mollit est laborum dolore',
      img: 'http://placekitten.com/300/300?440',
      followers: 422,
      following: 824,
    },
    type: 'fishing',
  },
  {
    img: 'http://placekitten.com/300/300?183',
    address: '200 Lafayette Avenue, Thornport, Minnesota, 6407',
    phone: '9475923198',
    weather: {
      title: 'irure cillum ex',
      icon: 'http://placekitten.com/100/100?776',
      water: 20,
      temperature: 14,
    },
    social_info: {
      title: 'nulla minim reprehenderit non',
      img: 'http://placekitten.com/300/300?519',
      followers: 965,
      following: 518,
    },
    type: 'hotel',
  },
  {
    img: 'http://placekitten.com/300/300?191',
    address: '341 Ovington Avenue, Colton, Delaware, 8271',
    phone: '8734133299',
    weather: {
      title: 'voluptate aute in',
      icon: 'http://placekitten.com/100/100?689',
      water: 26,
      temperature: 13,
    },
    social_info: {
      title: 'sint laboris officia esse',
      img: 'http://placekitten.com/300/300?389',
      followers: 431,
      following: 713,
    },
    type: 'fishing',
  },
  {
    img: 'http://placekitten.com/300/300?907',
    address: '323 Veranda Place, Adamstown, Oregon, 7398',
    phone: '9554132306',
    weather: {
      title: 'veniam excepteur veniam',
      icon: 'http://placekitten.com/100/100?642',
      water: 19,
      temperature: 30,
    },
    social_info: {
      title: 'dolor aute consectetur et',
      img: 'http://placekitten.com/300/300?551',
      followers: 760,
      following: 562,
    },
    type: 'tours',
  },
  {
    img: 'http://placekitten.com/300/300?577',
    address: '947 Marconi Place, Rivereno, Colorado, 8194',
    phone: '8675392480',
    weather: {
      title: 'quis cillum quis',
      icon: 'http://placekitten.com/100/100?508',
      water: 30,
      temperature: 29,
    },
    social_info: {
      title: 'aute magna labore in',
      img: 'http://placekitten.com/300/300?282',
      followers: 586,
      following: 114,
    },
    type: 'fishing',
  },
  {
    img: 'http://placekitten.com/300/300?848',
    address: '331 Grant Avenue, Mulino, Michigan, 985',
    phone: '8785873472',
    weather: {
      title: 'voluptate aute quis',
      icon: 'http://placekitten.com/100/100?926',
      water: 30,
      temperature: 12,
    },
    social_info: {
      title: 'aliqua nostrud do cillum',
      img: 'http://placekitten.com/300/300?174',
      followers: 966,
      following: 630,
    },
    type: 'hotel',
  },
  {
    img: 'http://placekitten.com/300/300?783',
    address: '399 Heath Place, Englevale, Washington, 1988',
    phone: '9105612555',
    weather: {
      title: 'nulla amet adipisicing',
      icon: 'http://placekitten.com/100/100?491',
      water: 29,
      temperature: 16,
    },
    social_info: {
      title: 'in dolore irure in',
      img: 'http://placekitten.com/300/300?595',
      followers: 831,
      following: 407,
    },
    type: 'fishing',
  },
  {
    img: 'http://placekitten.com/300/300?379',
    address: '529 Harman Street, Needmore, Virginia, 7967',
    phone: '9465673344',
    weather: {
      title: 'enim commodo non',
      icon: 'http://placekitten.com/100/100?650',
      water: 29,
      temperature: 22,
    },
    social_info: {
      title: 'est duis anim cillum',
      img: 'http://placekitten.com/300/300?638',
      followers: 612,
      following: 237,
    },
    type: 'hotel',
  },
];
