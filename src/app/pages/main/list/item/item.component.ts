import { Component, Input } from '@angular/core';
import { IWeatherItem } from '../../../../../../@types/IWeatherItem';

@Component({
  selector: 'ng-hotels-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.less'],
})
export class ItemComponent {
  @Input()
  public item?: IWeatherItem;
}
