import { Component } from '@angular/core';
import { ItemsService } from '../../../services/items.service';

@Component({
  selector: 'ng-hotels-selected-item',
  templateUrl: './selected-item.component.html',
  styleUrls: ['./selected-item.component.less'],
})
export class SelectedItemComponent {
  public socialInfo?: ISocialInfo;

  public constructor(private _itemsService: ItemsService) {
    this._itemsService.activeItem$.subscribe((item: IWeatherItem) => {
      this.socialInfo = item.social_info;
    });
  }
}
