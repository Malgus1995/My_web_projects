import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MouseTrackZoneComponent } from './mouse-track-zone/mouse-track-zone.component';

@NgModule({
  declarations: [
    AppComponent,
    MouseTrackZoneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
