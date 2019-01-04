import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { ListComponent } from './pages/main/list/list.component';
import { WeatherComponent } from './pages/main/weather/weather.component';
import { SelectedItemComponent } from './pages/main/selected-item/selected-item.component';
import { ItemComponent } from './pages/main/list/item/item.component';
import { FormatPhonePipe } from './pipes/format-phone.pipe';
import { FilterByPipe } from './pipes/filter-by.pipe';
import { MapByPipe } from './pipes/map-by.pipe';
import { UniqPipe } from './pipes/uniq.pipe';
import { BASE_API_PATH } from './config';
import { environment } from '../environments/environment';
import { ApiInterceptor } from './common/api-interceptor';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { GetItemsEffect } from './store/effects/items.effect';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ListComponent,
    WeatherComponent,
    SelectedItemComponent,
    ItemComponent,
    FormatPhonePipe,
    FilterByPipe,
    MapByPipe,
    UniqPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([GetItemsEffect]),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
  ],
  providers: [
    {
      provide: BASE_API_PATH,
      useValue: environment.baseApiPath,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
