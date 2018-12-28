import { Component } from '@angular/core';
import { ItemsService } from '../../../services/items.service';

@Component({
  selector: 'ng-hotels-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.less'],
})
export class WeatherComponent {
  public weather?: IWeather;

  public constructor(private _itemsService: ItemsService) {
    this._itemsService.activeItem$.subscribe((item: IWeatherItem) => {
      this.weather = item.weather;
    });
  }
}
