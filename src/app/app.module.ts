import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { ListComponent } from './pages/Main/list/list.component';
import { WeatherComponent } from './pages/Main/weather/weather.component';
import { SelectedItemComponent } from './pages/Main/selected-item/selected-item.component';
import { ItemComponent } from './pages/Main/list/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ListComponent,
    WeatherComponent,
    SelectedItemComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
