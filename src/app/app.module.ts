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

@NgModule({
  declarations: [
    AppComponent,
    EventContainerComponent,
    EventComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'Game Night Manager',
      maxAge: 25,
      logOnly: environment.production,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
