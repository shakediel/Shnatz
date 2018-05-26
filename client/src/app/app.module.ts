import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AngularFireAuth, AngularFireAuthModule} from "angularfire2/auth";
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp( {
      apiKey: "AIzaSyBZw6VyDQGvU_W5Yl1le757uOkXditWOtU",
      authDomain: "trytry-b24c8.firebaseapp.com",
      databaseURL: "https://trytry-b24c8.firebaseio.com",
      projectId: "trytry-b24c8",
      storageBucket: "trytry-b24c8.appspot.com",
      messagingSenderId: "879603139713"
    }, 'my-root'),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
