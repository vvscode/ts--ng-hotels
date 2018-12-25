import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { IWeatherItem } from '../../../../../@types/IWeatherItem';
import { Observable } from 'rxjs';

@Component({
  selector: 'ng-hotels-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less'],
})
export class ListComponent implements OnChanges {
  public types: string[];
  public activeType: string;

  @Input()
  public get activeItem(): IWeatherItem | null {
    return this._activeItem;
  }
  public set activeItem(activeItem: IWeatherItem) {
    this._activeItem = activeItem;
    this.activeType = activeItem ? activeItem.type : null;
  }

  @Input()
  public list?: Observable<IWeatherItem[]>;

  @Output()
  public cardChoosen: EventEmitter<IWeatherItem> = new EventEmitter();

  private _activeItem: IWeatherItem;

  public ngOnChanges(changes: SimpleChanges): void {
    // if (changes.activeItem) {
    //   this.activeType = changes.activeItem.currentValue.type;
    // }
  }

  public setActiveType(type: string): void {
    this.activeType = type;
  }

  public onCardClick(item: IWeatherItem): void {
    this.cardChoosen.emit(item);
  }
}
