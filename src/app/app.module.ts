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
import {DictionaryModule} from '@app/shared/dictionary/dictionaries/dictionary.module';
import { HeaderComponent } from './components/header/header.component'
import {HeaderModule} from '@app/components/header/header.module';
import { DisplayComponent } from './pages/profile/pages/display/components/display.component';
import {ProfileModule} from '@app/pages/profile/profile.module';
import { NotFoundComponent } from './pages/static/pages/not-found/components/not-found.component';
import { WelcomeComponent } from './pages/static/pages/welcome/components/welcome.component';
import {StaticModule} from '@app/pages/static/static.module';
import {AuthModule} from "@app/pages/auth/auth.module";
import {InitModule} from "@app/shared/dictionary/init/init.module";
import { EmployeesComponent } from './pages/employees/components/employees/employees.component';
import { JobsComponent } from './pages/jobs/components/jobs/jobs.component';


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
      MatNativeDateModule,
      DictionaryModule,
      InitModule,
      HeaderModule,
      NotificationModule.forRoot(),
      StoreRouterConnectingModule.forRoot(),
      StoreModule.forRoot({router: routerReducer},{
        /*runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true
        }*/
      }),
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
