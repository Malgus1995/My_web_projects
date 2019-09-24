import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ScmMainModule } from './scm-main/scm-main.module';
import {ProductModule} from './product/product.module';
import {CategoryModule} from './category/category.module';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { SharedModule } from './shared/shared.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase, 'my-app-name'),
    /* custom modules */
    ScmMainModule,
    ProductModule,
    CategoryModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
