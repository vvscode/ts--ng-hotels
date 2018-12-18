import { Component, Input } from '@angular/core';
import { ISocialInfo } from '../../../../../@types/IWeatherItem';

@Component({
  selector: 'ng-hotels-selected-item',
  templateUrl: './selected-item.component.html',
  styleUrls: ['./selected-item.component.less'],
})
export class SelectedItemComponent {
  @Input()
  public socialInfo?: ISocialInfo;
}
