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
  public activeItem?: IWeatherItem;

  @Input()
  public list?: Observable<IWeatherItem[]>;

  @Output()
  public cardChoosen: EventEmitter<IWeatherItem> = new EventEmitter();

  public ngOnChanges(changes: SimpleChanges): void {
    this.types = Array.from(
      changes.list.currentValue.value
        .map((el: IWeatherItem) => el.type)
        .reduce((set: Set<String>, el: string) => {
          set.add(el);
          return set;
        }, new Set())
        .values(),
    ).sort() as string[];
    this.activeType = changes.activeItem.currentValue.type;
  }

  public setActiveType(type: string): void {
    this.activeType = type;
  }

  public onCardClick(item: IWeatherItem): void {
    this.cardChoosen.emit(item);
  }
}
