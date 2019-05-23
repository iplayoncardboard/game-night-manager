import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EventContainerComponent } from './event/container/event-container.component';
import { EventComponent } from './event/component/event.component';


/* NgRx */
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects'
import { Browser } from 'protractor';
import { NavComponent } from './nav/nav.component';
import { BaseContainerComponent } from './base-container/base-container.component';
import { FooterComponent } from './footer/footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './core/material/material.module';
import { LoginComponent } from './user/login/login.component'
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'Game Night Manager',
      maxAge: 25
    }),
    MaterialModule
  ],
  declarations: [
    AppComponent,
    EventContainerComponent,
    EventComponent,
    NavComponent,
    BaseContainerComponent,
    FooterComponent,
    LoginComponent
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
