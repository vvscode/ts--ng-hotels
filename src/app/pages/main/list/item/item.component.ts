import { Component, Input } from '@angular/core';

@Component({
  selector: 'ng-hotels-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.less'],
})
export class ItemComponent {
  @Input()
  public item?: IWeatherItem;
}
