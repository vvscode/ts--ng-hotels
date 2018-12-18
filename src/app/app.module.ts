import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { ListComponent } from './pages/main/list/list.component';
import { WeatherComponent } from './pages/main/weather/weather.component';
import { SelectedItemComponent } from './pages/main/selected-item/selected-item.component';
import { ItemComponent } from './pages/main/list/item/item.component';
import { FilteredByTypePipe } from './pages/main/list/filtered-by-type.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ListComponent,
    WeatherComponent,
    SelectedItemComponent,
    ItemComponent,
    FilteredByTypePipe,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
