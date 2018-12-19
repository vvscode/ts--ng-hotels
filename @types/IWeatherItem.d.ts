export interface IWeather {
  title: string;
  icon: string;
  water: number;
  temperature: number;
}

export interface ISocialInfo {
  title: string;
  img: string;
  followers: number;
  following: number;
}

export interface IWeatherItem {
  img: string;
  address: string;
  phone: string;
  weather: IWeather;
  social_info: ISocialInfo;
  type: string;
}
