import { Component, Input } from '@angular/core';
import { IWeatherItem } from '../../../../../@types/IWeatherItem';
import { Observable } from 'rxjs';

@Component({
  selector: 'ng-hotels-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less'],
})
export class ListComponent {
  @Input()
  public list?: Observable<IWeatherItem[]>;
}
