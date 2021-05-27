import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFireStorageModule } from '@angular/fire/storage'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { environment } from '@src/environments/environment'
import { DemoComponent } from './pages/demo/demo.component'
import {RouterModule} from '@angular/router'
import {AppRoutingModule} from '@app/app-routing.module'

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

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
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
      MatNativeDateModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
    {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
