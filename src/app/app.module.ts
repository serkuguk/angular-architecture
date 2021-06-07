import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import {StoreRouterConnectingModule, routerReducer} from '@ngrx/router-store'

import { AppComponent } from './app.component'
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFireStorageModule } from '@angular/fire/storage'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {StoreDevtools, StoreDevtoolsModule} from '@ngrx/store-devtools'

import { environment } from '@src/environments/environment'
import { DemoComponent } from './pages/demo/demo.component'
import {RouterModule} from '@angular/router'
import {AppRoutingModule} from '@app/app-routing.module'

import {reducers} from '@app/shared/dictionary/dictionaries/reducer'

//Date
import {MatNativeDateModule, MatDateFormats, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core'
const APP_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: {date: 'numeric', month: 'numeric', year: 'numeric'}
  },
  display: {
    dateInput: {day: 'numeric', month: 'short', year: 'numeric'},
    monthYearLabel: {year: 'numeric', month: 'short'},
    dateA11yLabel: {year: 'numeric', month: 'long', day: 'numeric'},
    monthYearA11yLabel: {month: 'long', year: 'numeric'}
  }
}

//Services
import {NotificationModule} from '@app/shared/services'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import {DictionaryModule} from '@app/shared/dictionary/dictionary.module';
import { HeaderComponent } from './components/header/header.component'


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    HeaderComponent
  ],
  imports: [
      BrowserModule,
      AngularFireModule.initializeApp(environment.firebase.config),
      AngularFireStorageModule,
      AngularFirestoreModule,
      AngularFireAuthModule,
      RouterModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatNativeDateModule,
      DictionaryModule,
      NotificationModule.forRoot(),
      StoreRouterConnectingModule.forRoot(),
      StoreModule.forRoot({router: routerReducer},{}),
      EffectsModule.forRoot([]),
      StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),

  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
    {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
