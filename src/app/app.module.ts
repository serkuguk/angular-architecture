import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFireStorageModule } from '@angular/fire/storage'

import { environment } from '@src/environments/environment'
import { DemoComponent } from './pages/demo/demo.component'
import {RouterModule} from '@angular/router'
import {AppRoutingModule} from '@app/app-routing.module'

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
        AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
