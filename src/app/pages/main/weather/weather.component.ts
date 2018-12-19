import { Component, Input } from '@angular/core';
import { IWeather } from '../../../../../@types/IWeatherItem';

@Component({
  selector: 'ng-hotels-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.less'],
})
export class WeatherComponent {
  @Input()
  public weather?: IWeather;
}
