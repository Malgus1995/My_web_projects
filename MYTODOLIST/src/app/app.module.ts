import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentsComponent } from './contents/contents.component';
import { HeaderComponent } from './contents/header/header.component';
import { BodyComponent } from './contents/body/body.component';
import { TodoItemsComponent } from './contents/body/todo-items/todo-items.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentsComponent,
    HeaderComponent,
    BodyComponent,
    TodoItemsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
