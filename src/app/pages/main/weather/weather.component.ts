import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'ng-hotels-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.less'],
})
export class WeatherComponent {
  public weather$?: Observable<IWeather>;

  public constructor(
    private _store: Store<{
      items: IWeatherItem[];
      activeType: string;
      activeItem: IWeatherItem;
    }>,
  ) {
    this.weather$ = _store.pipe(
      select(
        (state: IStore) => (state.activeItem || ({} as IWeatherItem)).weather,
      ),
    );
  }
}
