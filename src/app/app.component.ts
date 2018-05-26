import { Component } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public afAuth: AngularFireAuth) {
    let config = {
      apiKey: "AIzaSyBZw6VyDQGvU_W5Yl1le757uOkXditWOtU",
      authDomain: "trytry-b24c8.firebaseapp.com",
      databaseURL: "https://trytry-b24c8.firebaseio.com",
      projectId: "trytry-b24c8",
      storageBucket: "trytry-b24c8.appspot.com",
      messagingSenderId: "879603139713"
    };
    firebase.initializeApp(config);
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}



