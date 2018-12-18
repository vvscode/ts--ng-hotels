import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy',
})
export class FilterByPipe<T> implements PipeTransform {
  public transform(
    value: T[],
    fieldName: string,
    fieldValue: string | number,
  ): T[] {
    return value.filter((el: T) => el[fieldName] === fieldValue);
  }
}
