import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IWeatherItem } from '../../../@types/IWeatherItem';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  public constructor(@Inject(HttpClient) private _http: HttpClient) {}

  public getItems(): Observable<IWeatherItem[]> {
    return this._http.get<IWeatherItem[]>(`/items/data.json`);
  }
}
