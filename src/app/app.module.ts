import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
