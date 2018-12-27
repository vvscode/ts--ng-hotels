declare interface IWeather {
  title: string;
  icon: string;
  water: number;
  temperature: number;
}

declare interface ISocialInfo {
  title: string;
  img: string;
  followers: number;
  following: number;
}

declare interface IWeatherItem {
  img: string;
  address: string;
  phone: string;
  weather: IWeather;
  social_info: ISocialInfo;
  type: string;
}
