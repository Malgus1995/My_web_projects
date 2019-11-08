import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MessageRoutingModule} from './message-routing.module';
import {MessageComponent} from './message.component';
import {MatTableModule} from "@angular/material";
import { MatPaginatorModule } from '@angular/material';

@NgModule({
  declarations:[MessageComponent],
  imports: [
    MatTableModule,
    MatPaginatorModule,

    CommonModule,
    MessageRoutingModule
  ]
})
export class MessageModule { }
