import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

import { data } from './data';
import { IWeatherItem } from '../../../../@types/IWeatherItem';

@Component({
  selector: 'ng-hotels-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
})
export class MainComponent {
  public listItems?: Observable<IWeatherItem[]> = of<IWeatherItem[]>(data);
}
